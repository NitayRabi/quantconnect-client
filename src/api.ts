import axios from "axios";
import { EndpointToInterface, EndpointMethod } from "./types";
import { createInternalError, sha256 } from "./utils";

export const BASE_URL = "https://www.quantconnect.com/api";

export type QuantConnectConfig = {
  userId: string;
  token: string;
  version?: string;
};

const supportedVersions = ["v2"];

const defaultConfig = {
  version: "v2",
};

type CreateAPIMethod = <T extends keyof EndpointToInterface>(
  endpoint: T
) => EndpointMethod<EndpointToInterface[T]>;

const quantconnect = (config: QuantConnectConfig) => {
  const { userId, token, version } = { ...defaultConfig, ...config };
  if (!userId || !token) {
    throw createInternalError(`userId and token are required parameters!`);
  }

  if (!version || !supportedVersions.includes(version)) {
    throw createInternalError(
      `Invalid version used, supported versions are: ${supportedVersions}. Got: ${version}!`
    );
  }

  const createApiMethod: CreateAPIMethod =
    (endpoint) => async (params: any) => {
      const timestamp = new Date().getTime();
      const hash = await sha256(`${token}:${timestamp}`);
      try {
        const { data } = await axios(endpoint, {
          baseURL: `${BASE_URL}/${version}`,
          headers: { Timestamp: timestamp.toString() },
          auth: { username: userId, password: hash },
          params,
        });
        return data;
      } catch (e) {
        const msg = e instanceof Error ? e.message : `${e}`;
        throw createInternalError(msg);
      }
    };

  return {
    authenticate: createApiMethod("authenticate"),
    live: {
      read: createApiMethod("live/read"),
    },
    files: {
      create: createApiMethod("files/create"),
      read: createApiMethod("files/read"),
      update: createApiMethod("files/update"),
      delete: createApiMethod("files/delete"),
    },
    projects: {
      create: createApiMethod("projects/create"),
      read: createApiMethod("projects/read"),
      update: createApiMethod("projects/update"),
      delete: createApiMethod("projects/delete"),
    },
  };
};

export default quantconnect;
