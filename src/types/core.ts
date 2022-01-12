export type QuantConnectResponse = {
  errors?: Array<string>;
  success: boolean;
};

export type PaginationParams = {
  start: string;
  end: string;
};

/**
 * @description [Authenticate a userId and token](https://www.quantconnect.com/docs/v2/our-platform/api-reference/authentication)
 * @example
 * ```typescript
 * const { authenticate } = quantconnect({userId, token});
 *
 * const { success } = await authenticate();
 * ```
 */
export type Authenticate = () => Promise<QuantConnectResponse>;
