import { ReadProjectParams } from "./projects";

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
