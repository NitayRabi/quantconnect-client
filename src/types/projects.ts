import { QuantConnectResponse } from "./core";

export type ProjectLanguage = "C#" | "Py";

export type ProjectModel = {
  projectId: number;
  name: string;
  created: string;
  modified: string;
  language: ProjectLanguage;
};

export type ReadProjectParams = {
  projectId: number;
};

export type CreateProjectParams = {
  name: string;
  language: ProjectLanguage;
};

export type UpdateProjectParams = ReadProjectParams & {
  name: string;
  description: string;
};

export type QuantConnectProjectsResponse = QuantConnectResponse & {
  projects: Array<ProjectModel>;
};

/**
 *
 * @description [Read a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/read-project)
 * @example
 * ```typescript
 * const { projects } = quantconnect({ userId, token })
 *
 * const allProjects = await projects.read();
 * const specificProject = await projects.read({ projectId: 2134213 });
 * ```
 */
export type ReadProject = (
  params?: ReadProjectParams
) => Promise<QuantConnectProjectsResponse>;

/**
 *
 * @description [Create a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/create-project)
 * @example
 * ```typescript
 * const {projects} = quantconnect({userId, token})
 *
 * const {success} = await projects.create({
 *      language: "Py",
 *       name: "Some project name",
 *    })
 * ```
 */
export type CreateProject = (
  params: CreateProjectParams
) => Promise<QuantConnectProjectsResponse>;

/**
 *
 * @description [Update a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/update-project)
 * @example
 * ```typescript
 * const {projects} = quantconnect({userId, token})
 *
 *  const {success} = await projects.update({
 *       description: "A new description",
 *       name: "New name",
 *       projectId: 21512,
 *     })
 * ```
 */
export type UpdateProject = (
  params: UpdateProjectParams
) => Promise<QuantConnectProjectsResponse>;

/**
 *
 * @description [Delete a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/delete-project)
 * @example
 * ```typescript
 * const {projects} = quantconnect({userId, token})
 *
 * const {success} = await projects.delete({ projectId: 2134213 });
 * ```
 */
export type DeleteProject = (
  params: ReadProjectParams
) => Promise<QuantConnectProjectsResponse>;
