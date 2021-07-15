(self.webpackChunk=self.webpackChunk||[]).push([[130],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=i,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7926:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=t(2122),i=t(9756),r=(t(7294),t(3905)),o=["components"],p={id:"graphql-project-config",title:"GraphQLProjectConfig",sidebar_label:"GraphQLProjectConfig"},c={unversionedId:"graphql-project-config",id:"graphql-project-config",isDocsHomePage:!1,title:"GraphQLProjectConfig",description:"The GraphQLProjectConfig represents projects defined in GraphQL Config file.",source:"@site/docs/api-graphql-project-config.md",sourceDirName:".",slug:"/graphql-project-config",permalink:"/graphql-project-config",editUrl:"https://github.com/kamilkisiela/graphql-config/edit/master/website/docs/api-graphql-project-config.md",version:"current",sidebar_label:"GraphQLProjectConfig",frontMatter:{id:"graphql-project-config",title:"GraphQLProjectConfig",sidebar_label:"GraphQLProjectConfig"},sidebar:"docs",previous:{title:"GraphQLConfig",permalink:"/graphql-config"},next:{title:"Migration",permalink:"/migration"}},l=[{value:"API",id:"api",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>filepath</code>",id:"filepath",children:[]},{value:"<code>dirpath</code>",id:"dirpath",children:[]},{value:"<code>extensions</code>",id:"extensions",children:[]},{value:"<code>schema</code>",id:"schema",children:[]},{value:"<code>documents</code>",id:"documents",children:[]},{value:"<code>include</code>",id:"include",children:[]},{value:"<code>exclude</code>",id:"exclude",children:[]},{value:"<code>projects</code>",id:"projects",children:[]},{value:"<code>hasExtension()</code>",id:"hasextension",children:[]},{value:"<code>getDefault()</code>",id:"getdefault",children:[]},{value:"<code>extension()</code>",id:"extension",children:[]},{value:"<code>getSchema()</code>",id:"getschema",children:[]},{value:"<code>getSchemaSync()</code>",id:"getschemasync",children:[]},{value:"<code>getDocuments()</code>",id:"getdocuments",children:[]},{value:"<code>getDocumentsSync()</code>",id:"getdocumentssync",children:[]},{value:"<code>match()</code>",id:"match",children:[]}]}],d={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLProjectConfig")," represents projects defined in GraphQL Config file."),(0,r.kt)("p",null,"A basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {loadConfig} from 'graphql-config';\n\nasync function main() {\n  const config = await loadConfig({...}); // an instance of GraphQLConfig\n\n  const project = config.getDefault(); // an instance of GraphQLProjectConfig\n}\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"string"))),(0,r.kt)("p",null,"Project's name."),(0,r.kt)("h3",{id:"filepath"},(0,r.kt)("inlineCode",{parentName:"h3"},"filepath")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"string"))),(0,r.kt)("p",null,"An exact path of a config file."),(0,r.kt)("h3",{id:"dirpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"dirpath")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"string"))),(0,r.kt)("p",null,"A path of a directory where GraphQL Config was found."),(0,r.kt)("h3",{id:"extensions"},(0,r.kt)("inlineCode",{parentName:"h3"},"extensions")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"IExtensions"))),(0,r.kt)("p",null,"A raw key-value object representing extensions."),(0,r.kt)("h3",{id:"schema"},(0,r.kt)("inlineCode",{parentName:"h3"},"schema")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"SchemaPointer"))),(0,r.kt)("p",null,"Value defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," property, in the config file."),(0,r.kt)("h3",{id:"documents"},(0,r.kt)("inlineCode",{parentName:"h3"},"documents")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"DocumentPointer"))),(0,r.kt)("p",null,"Value defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," property, in the config file."),(0,r.kt)("h3",{id:"include"},(0,r.kt)("inlineCode",{parentName:"h3"},"include")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"string | string[]"))),(0,r.kt)("p",null,"Value defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," property, in the config file."),(0,r.kt)("h3",{id:"exclude"},(0,r.kt)("inlineCode",{parentName:"h3"},"exclude")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"string | string[]"))),(0,r.kt)("p",null,"Value defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude")," property, in the config file."),(0,r.kt)("h3",{id:"projects"},(0,r.kt)("inlineCode",{parentName:"h3"},"projects")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"{ [projectName: string]: GraphQLProjectConfig }"))),(0,r.kt)("p",null,"A key-value object where key is a project's name but value contains ",(0,r.kt)("a",{parentName:"p",href:"/graphql-project-config"},(0,r.kt)("inlineCode",{parentName:"a"},"GraphQLProjectConfig"))," object."),(0,r.kt)("h3",{id:"hasextension"},(0,r.kt)("inlineCode",{parentName:"h3"},"hasExtension()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"hasExtension(name: string): boolean"))),(0,r.kt)("p",null,"Checks if project contains the extension."),(0,r.kt)("h3",{id:"getdefault"},(0,r.kt)("inlineCode",{parentName:"h3"},"getDefault()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getDefault(): GraphQLProjectConfig | never"))),(0,r.kt)("p",null,"Returns a default project."),(0,r.kt)("h3",{id:"extension"},(0,r.kt)("inlineCode",{parentName:"h3"},"extension()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"extension<T = any>(name: string): T"))),(0,r.kt)("p",null,"Allows to access extension's configuration + ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"documents"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude")," values are also added to the object."),(0,r.kt)("h3",{id:"getschema"},(0,r.kt)("inlineCode",{parentName:"h3"},"getSchema()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getSchema(): Promise<GraphQLSchema>"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getSchema(out: 'DocumentNode'): Promise<DocumentNode>"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getSchema(out: 'GraphQLSchema'): Promise<GraphQLSchema>"))),(0,r.kt)("p",null,"Allows to access ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object based on provided information (in ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," property of project's configuration)."),(0,r.kt)("h3",{id:"getschemasync"},(0,r.kt)("inlineCode",{parentName:"h3"},"getSchemaSync()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getSchemaSync(): GraphQLSchema"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getSchemaSync(out: 'DocumentNode'): DocumentNode"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getSchemaSync(out: 'GraphQLSchema'): GraphQLSchema"))),(0,r.kt)("p",null,"Allows to access ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object based on provided information (in ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," property of project's configuration)."),(0,r.kt)("h3",{id:"getdocuments"},(0,r.kt)("inlineCode",{parentName:"h3"},"getDocuments()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getDocuments(): Promise<Source[]>"))),(0,r.kt)("p",null,"Access Operations and Fragments wrapped with ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," class based on provided information (in ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," property of project's configuration)."),(0,r.kt)("h3",{id:"getdocumentssync"},(0,r.kt)("inlineCode",{parentName:"h3"},"getDocumentsSync()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"getDocumentsSync(): Source[]"))),(0,r.kt)("p",null,"Access Operations and Fragments wrapped with ",(0,r.kt)("inlineCode",{parentName:"p"},"Source")," class based on provided information (in ",(0,r.kt)("inlineCode",{parentName:"p"},"documents")," property of project's configuration)."),(0,r.kt)("h3",{id:"match"},(0,r.kt)("inlineCode",{parentName:"h3"},"match()")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"em"},"match(filepath: string): boolean"))),(0,r.kt)("p",null,"Checks if file belongs to the project. It considers ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"documents"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"exclude")," options to see if the file path matches one of those values."))}m.isMDXComponent=!0}}]);