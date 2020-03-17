import {GraphQLSchema, DocumentNode, parse, print} from 'graphql';
import {dirname, isAbsolute, relative, normalize} from 'path';
import {mergeTypeDefs} from '@graphql-toolkit/schema-merging';
import {Source} from '@graphql-toolkit/common';
import minimatch from 'minimatch';
import {ExtensionMissingError} from './errors';
import {GraphQLExtensionsRegistry} from './extension';
import {IExtensions, IGraphQLProject} from './types';
import {
  UnnormalizedTypeDefPointer,
  OPERATION_KINDS,
} from '@graphql-toolkit/core';

type Pointer = UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[];
type SchemaOutput = 'GraphQLSchema' | 'DocumentNode' | 'string';

export class GraphQLProjectConfig {
  readonly schema: Pointer;
  readonly documents?:
    | UnnormalizedTypeDefPointer
    | UnnormalizedTypeDefPointer[];
  readonly include?: string | string[];
  readonly exclude?: string | string[];
  readonly extensions: IExtensions;
  readonly filepath: string;
  readonly dirpath: string;
  readonly name: string;

  private readonly _extensionsRegistry: GraphQLExtensionsRegistry;

  constructor({
    filepath,
    name,
    config,
    extensionsRegistry,
  }: {
    filepath: string;
    name: string;
    config: IGraphQLProject;
    extensionsRegistry: GraphQLExtensionsRegistry;
  }) {
    this.filepath = filepath;
    this.dirpath = dirname(filepath);
    this.name = name;
    this.extensions = config.extensions || {};
    this.schema = config.schema;
    this.documents = config.documents;
    this.include = config.include;
    this.exclude = config.exclude;

    this._extensionsRegistry = extensionsRegistry;
  }

  hasExtension(name: string): boolean {
    return !!this.extensions[name];
  }

  extension<T = any>(name: string): T {
    const extension = this._extensionsRegistry.get(name);

    if (!extension) {
      throw new ExtensionMissingError(
        `Project ${this.name} is missing ${name} extension`,
      );
    }

    return {
      ...this.extensions[name],
      schema: this.schema,
      documents: this.documents,
      include: this.include,
      exclude: this.exclude,
    };
  }

  // Get Schema

  async getSchema(): Promise<GraphQLSchema>;
  async getSchema(out: 'DocumentNode'): Promise<DocumentNode>;
  async getSchema(out: 'GraphQLSchema'): Promise<GraphQLSchema>;
  async getSchema(out: 'string'): Promise<string>;
  async getSchema(
    out?: SchemaOutput,
  ): Promise<GraphQLSchema | DocumentNode | string> {
    return this.loadSchema(this.schema, out as any);
  }

  getSchemaSync(): GraphQLSchema;
  getSchemaSync(out: 'DocumentNode'): DocumentNode;
  getSchemaSync(out: 'GraphQLSchema'): GraphQLSchema;
  getSchemaSync(out: 'string'): string;
  getSchemaSync(out?: SchemaOutput): GraphQLSchema | DocumentNode | string {
    return this.loadSchemaSync(this.schema, out as any);
  }

  // Get Documents

  async getDocuments(): Promise<Source[]> {
    if (!this.documents) {
      return [];
    }

    return this.loadDocuments(this.documents);
  }

  getDocumentsSync(): Source[] {
    if (!this.documents) {
      return [];
    }

    return this.loadDocumentsSync(this.documents);
  }

  // Load Schema

  async loadSchema(pointer: Pointer): Promise<GraphQLSchema>;
  async loadSchema(pointer: Pointer, out: 'string'): Promise<GraphQLSchema>;
  async loadSchema(
    pointer: Pointer,
    out: 'DocumentNode',
  ): Promise<DocumentNode>;
  async loadSchema(
    pointer: Pointer,
    out: 'GraphQLSchema',
  ): Promise<GraphQLSchema>;
  async loadSchema(
    pointer: Pointer,
    out?: SchemaOutput,
  ): Promise<GraphQLSchema | DocumentNode | string> {
    out = out || 'GraphQLSchema';

    if (out === 'GraphQLSchema') {
      return this._extensionsRegistry.loaders.schema.loadSchema(pointer);
    }

    const sources = await this._extensionsRegistry.loaders.schema.loadTypeDefs(
      pointer,
      {
        filterKinds: OPERATION_KINDS,
      },
    );

    return mergeTypes(sources, out);
  }

  loadSchemaSync(pointer: Pointer): GraphQLSchema;
  loadSchemaSync(pointer: Pointer, out: 'string'): GraphQLSchema;
  loadSchemaSync(pointer: Pointer, out: 'DocumentNode'): DocumentNode;
  loadSchemaSync(pointer: Pointer, out: 'GraphQLSchema'): GraphQLSchema;
  loadSchemaSync(
    pointer: Pointer,
    out?: 'GraphQLSchema' | 'DocumentNode' | 'string',
  ): GraphQLSchema | DocumentNode | string {
    out = out || 'GraphQLSchema';

    if (out === 'GraphQLSchema') {
      return this._extensionsRegistry.loaders.schema.loadSchemaSync(pointer);
    }

    const sources = this._extensionsRegistry.loaders.schema.loadTypeDefsSync(
      pointer,
      {
        filterKinds: OPERATION_KINDS,
      },
    );

    return mergeTypes(sources, out);
  }

  // Load Documents

  async loadDocuments(pointer: Pointer): Promise<Source[]> {
    if (!pointer) {
      return [];
    }

    return this._extensionsRegistry.loaders.documents.loadDocuments(pointer);
  }

  loadDocumentsSync(pointer: Pointer): Source[] {
    if (!pointer) {
      return [];
    }

    return this._extensionsRegistry.loaders.documents.loadDocumentsSync(
      pointer,
    );
  }

  // Rest

  match(filepath: string): boolean {
    const isSchemaOrDocument = [this.schema, this.documents].some(pointer =>
      match(filepath, this.dirpath, pointer),
    );

    if (isSchemaOrDocument) {
      return true;
    }

    const isExcluded = this.exclude
      ? match(filepath, this.dirpath, this.exclude)
      : false;

    if (isExcluded) {
      return false;
    }

    const isIncluded = this.include
      ? match(filepath, this.dirpath, this.include)
      : false;

    if (isIncluded) {
      return true;
    }

    return false;
  }
}

// XXX: it works but uses nodejs - expose normalization of file and dir paths in config
function match(filepath: string, dirpath: string, pointer?: Pointer): boolean {
  if (!pointer) {
    return false;
  }

  if (Array.isArray(pointer)) {
    return pointer.some(p => match(filepath, dirpath, p));
  }

  if (typeof pointer === 'string') {
    const normalizedFilepath = normalize(
      isAbsolute(filepath) ? relative(dirpath, filepath) : filepath,
    );
    return minimatch(normalizedFilepath, normalize(pointer), {dot: true});
  }

  if (typeof pointer === 'object') {
    return match(filepath, dirpath, Object.keys(pointer)[0]);
  }

  return false;
}

function mergeTypes(sources: Source[], out: SchemaOutput) {
  const mergedTypedefs = mergeTypeDefs(sources.map(s => s.document));

  if (typeof mergedTypedefs === 'string') {
    if (out === 'string') {
      return mergedTypedefs;
    } else if (out === 'DocumentNode') {
      return parse(mergedTypedefs);
    }
  } else if ('kind' in mergedTypedefs) {
    if (out === 'DocumentNode') {
      return mergedTypedefs;
    } else if (out === 'string') {
      return print(mergedTypedefs);
    }
  }
}
