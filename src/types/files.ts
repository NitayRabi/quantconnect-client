import { QuantConnectResponse } from ".";
import { ReadProjectParams } from "./projects";

export type QuantConnectFile = {
  name: string;
  content: string;
  modified: string;
};

export type CreateFileParams = ReadProjectParams & {
  name: string;
  content: string;
};

export type ReadFileParams = ReadProjectParams & {
  fileName: string;
};

export type UpdateFileNameParams = ReadProjectParams & {
  oldFileName: string;
  newFileName: string;
};

export type UpdateFileContentParams = ReadFileParams & {
  newFileContents: string;
};

export type UpdateFileParams = UpdateFileNameParams | UpdateFileContentParams;

export type DeleteFileParams = ReadProjectParams & {
  name: string;
};

export type ReadFilesResponse = QuantConnectResponse & {
  files: Array<QuantConnectFile>;
};
/**
 *
 * @description [Read project's files](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/read-file)
 * @example
 * ```typescript
 * const { files } = quantconnect({ userId, token })
 *
 * const {files, success} = await files.read({ projectId: 214512 });
 * ```
 */
export type ReadFiles = (params?: ReadFileParams) => Promise<ReadFilesResponse>;

/**
 *
 * @description [Create a file](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/create-file)
 * @example
 * ```typescript
 * const {files} = quantconnect({userId, token})
 *
 * const {files, success} = await files.create({
 *       "projectId": 0,
 *       "name": "main.py",
 *       "content": "string"
 *    })
 * ```
 */
export type CreateFile = (
  params: CreateFileParams
) => Promise<ReadFilesResponse>;

/**
 *
 * @description [Update a file](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/update-file)
 * @example
 * ```typescript
 * const {files} = quantconnect({userId, token})
 *
 * // Update a file name
 * const {success} = await files.update({
 *       projectId: 0,
 *       oldFileName: "main.py",
 *       newFileName: "new.py",
 *     })
 *
 * // Update a file content
 * const {success} = await files.update({
 *       projectId: 0,
 *       fileName: "main.py",
 *       newFileContents: "",
 *     })
 * ```
 */
export type UpdateFile = (
  params: UpdateFileParams
) => Promise<QuantConnectResponse>;

/**
 *
 * @description [Delete a File](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/delete-file)
 * @example
 * ```typescript
 * const {files} = quantconnect({userId, token})
 *
 * const {success} = await files.delete({ projectId: 2134213, name: 'main.py' });
 * ```
 */
export type DeleteFile = (
  params: DeleteFileParams
) => Promise<QuantConnectResponse>;
