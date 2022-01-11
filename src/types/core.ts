export type QuantConnectResponse = {
  errors?: Array<string>;
  success: boolean;
};

export type PaginationParams = {
  start: string;
  end: string;
};
