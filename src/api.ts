import axios from "axios";
import { EndpointToMethod, QuantConnectClient } from "./types";
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

/**
 * @hidden
 */
export type CreateAPIMethod = <Key extends keyof EndpointToMethod>(
  endpoint: Key
) => EndpointToMethod[Key];

const getCreateApiMethod: (config: QuantConnectConfig) => CreateAPIMethod =
  ({ token, version, userId }) =>
    (endpoint) =>
      async (params?: any) => {
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

/**
 *
 * @param config  (userId, token).
 * @example
 * ```typescript
 * import quantconnect from 'quantconnect-client';
 *
 * const client = quantconnect({userId, token});
 * ```
 *
 * @returns
 *
 */
const quantconnect = (config: QuantConnectConfig): QuantConnectClient => {
  const { userId, token, version } = { ...defaultConfig, ...config };
  if (!userId || !token) {
    throw createInternalError(`userId and token are required parameters!`);
  }

  if (!version || !supportedVersions.includes(version)) {
    throw createInternalError(
      `Invalid version used, supported versions are: ${supportedVersions}. Got: ${version}!`
    );
  }

  const createApiMethod = getCreateApiMethod({ userId, token, version });

  return {
    authenticate: createApiMethod<"authenticate">("authenticate"),
    live: {
      list: createApiMethod("live/list"),
      read: createApiMethod("live/read"),
      create: createApiMethod("live/create"),
      stop: createApiMethod("live/update/stop"),
      liquidate: createApiMethod("live/update/liquidate"),
      log: createApiMethod("live/read/log"),
      portfolio: createApiMethod("live/read/portfolio"),
      orders: createApiMethod("live/read/orders"),
      chart: createApiMethod("live/chart/read"),
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
    backtests: {
      create: createApiMethod("backtests/create"),
      read: createApiMethod("backtests/read"),
      update: createApiMethod("backtests/update"),
      delete: createApiMethod("backtests/delete"),
    },
    user: {
      read: createApiMethod("user/read"),
    },
  };
};

export default quantconnect;
