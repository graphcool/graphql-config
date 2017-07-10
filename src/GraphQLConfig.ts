import {
  GraphQLConfigData,
} from './types'

import {
  findConfigPath,
  readConfig,
  isFileInDirs,
  validateConfig,
} from './utils'

import { GraphQLProjectConfig } from './GraphQLProjectConfig'

export class GraphQLConfig {
  public config: GraphQLConfigData
  public configPath: string

  constructor(
    public rootPath: string = process.cwd()
  ) {
    this.configPath = findConfigPath(rootPath)
    this.config = readConfig(this.configPath)
    validateConfig(this.config)
  }

  getProjectConfig(projectName: string): GraphQLProjectConfig {
    return new GraphQLProjectConfig(this.configPath, projectName, this.config)
  }

  getConfigForFile(filePath: string): GraphQLProjectConfig | null {
    const { projects } = this.config

    if (!projects || Object.keys(projects).length === 0) {
      const config = new GraphQLProjectConfig(this.configPath, undefined, this.config)
      return config.includesFile(filePath) ? config : null
    }

    Object.entries(projects).forEach(([projectName, project]) => {
      if (
        isFileInDirs(filePath, project.includeDirs) &&
        !isFileInDirs(filePath, project.excludeDirs)
      ) {
        return this.getProjectConfig(projectName)
      }
    })
    return null
  }

  getProjects(): { [name: string]: GraphQLProjectConfig } {
    const result = {}
    for (const projectName in (this.config.projects || {})) {
      result[projectName] = this.getProjectConfig(projectName)
    }
    return result
  }
}