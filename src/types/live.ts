import { ReadProjectParams } from "./projects";
import { QuantConnectResponse, PaginationParams } from "./core";
import { Cash, ChartsObject, LiveResultsData } from "./models";

export type OrderEvent = {
  "symbol-value": string,
  "symbol-permtick": string,
  id: string,
  "algorithm-id": string,
  "order-id": number,
  "order-event-id": number,
  symbol: string,
  time: number,
  status: string,
  "fill-price": number,
  "fill-price-currency": string,
  "fill-quantity": number,
  direction: string,
  message: string,
  "is-assignment": boolean,
  quantity: number,
}

export type QuantConnectOrder = {
  Type: number,
  Id: number,
  ContingentId: number,
  BrokerId: string[],
  Symbol: {
    Value: string,
    ID: string,
    Permtick: string,
  },
  Price: number,
  PriceCurrency: string,
  Time: string,
  CreatedTime: string,
  LastFillTime: string,
  Quantity: number,
  Status: number,
  Tag: string
  Properties: {
    TimeInForce: {
    },
  },
  SecurityType: number,
  Direction: number,
  Value: number,
  OrderSubmissionData: {
    BidPrice: number,
    AskPrice: number,
    LastPrice: number,
  },
  IsMarketable: boolean,
  PriceAdjustmentMode: number,
  Events: OrderEvent[],
};

export type LiveAlgoStatus =
  | "DeployError"
  | "InQueue"
  | "Running"
  | "Stopped"
  | "Liquidated"
  | "Deleted"
  | "Completed"
  | "RuntimeError"
  | "Invalid"
  | "LoggingIn"
  | "Initializing"
  | "History";

export type BrokerageType =
  | "Interactive"
  | "FXCM"
  | "Oanda"
  | "Tradier"
  | "PaperTrading"
  | "Alpaca"
  | "Bitfinex"
  | "Binance"
  | "GDAX";

export type ReadLiveListParams = Partial<PaginationParams> & {
  status: LiveAlgoStatus;
};

export type ReadLiveAlgoParams = ReadProjectParams & {
  deployId: string;
  subscription?: string;
};

export type BrokerageEnvironment = "live" | "paper";

export type BaseLiveAlgorithmSettings = {
  id: string;
  user: string;
  environment: BrokerageEnvironment;
  password: string;
  account: string;
};

export type CreateLiveParams = ReadProjectParams & {
  compileId: string;
  serverType: string;
  versionId: string;
  baseLiveAlgorithmSettings: BaseLiveAlgorithmSettings;
};

export type ReadLiveParams = ReadLiveListParams | ReadLiveAlgoParams;
export type ReadLiveLogParams = ReadProjectParams & {
  format: string;
  algorithmId: string;
  /**
   * No logs will be returned before this log line
   */
  startLine: number;
  /**
   * No logs will be returned after this log line.
   */
  endLine: number;
};

export type ReadLiveOrdersParams = ReadProjectParams & {
  start: number;
  end: number;
}

export type ReadLiveOrdersResponse = QuantConnectResponse & {
  length: number;
  orders: Array<QuantConnectOrder>;
}

export type ReadLiveChartParams = ReadProjectParams & {
  name: string;
  start: number;
  end: number;
  count: number;
}

export type ReadLiveChartResponse = QuantConnectResponse & {
  chart: ChartsObject
  status: string;
}

export type LiveAlgoDescription = {
  projectId: number;
  deployId: string;
  status: LiveAlgoStatus;
  launched: string;
  stopped: null;
  brokerage: string;
  subscription: string;
  error?: string;
};

export type QuantConnectLiveListResponse = QuantConnectResponse & {
  live: Array<LiveAlgoDescription>;
};

export type ReadLivePortfolioResponse = QuantConnectResponse & {
  portfolio: {
    holdings: Record<string, LiveResultsData['Holdings']>,
    cash: Record<string, Cash>
  }
}

export type QuantConnectLiveResponse = QuantConnectResponse & {
  LiveResults: {
    version: number;
    resolution: "second" | "10minutes" | "minute";
    results: LiveResultsData;
  };
};

export type QuantConnectLiveLogsResponse = QuantConnectResponse & {
  logs: Array<string>;
  length: number;
};

export type QuantConnectCreateLiveResponse = QuantConnectResponse & {
  projectId: number;
  deployId: string;
  status: LiveAlgoStatus;
  launched: string;
  stopped: string;
  brokerage: BrokerageType;
  subscription: string;
  error?: string;
};

/**
 *
 * @description [Get live algorithm(s) data](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/get-live-algorithm-statistics)
 * @example
 * ```typescript
 * const {live} = quantconnect({userId, token})
 *
 * // Single algorithm reading
 * const liveAlgorithmData = await live.read({ projectId: 2134213, deployId: 'deploy-id-string' });
 *
 * // List of running algorithms
 * const allRunningAlgorithms = await live.read({ "status": "Running" })
 * ```
 */
export type ReadLive = <T extends ReadLiveListParams | ReadLiveAlgoParams>(
  params: T
) => Promise<
  T extends ReadLiveAlgoParams
  ? QuantConnectLiveResponse
  : QuantConnectLiveListResponse
>;

/**
 *
 * @description [Get live algorithm log](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/read-live-algorithm-log)
 * @example
 * ```typescript
 * const {live} = quantconnect({userId, token})
 *
 * const {LiveLogs} = await live.log({ "format": "json",
 *   "projectId": 0,
 *   "algorithmId": "string",
 *   "start": 0,
 *   "end": 0});
 * ```
 */
export type ReadLiveLog = (
  params: ReadLiveLogParams
) => Promise<QuantConnectLiveLogsResponse>;

/**
 *
 * @description [Create a live algorithm](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/create-live-algorithm)
 * @example
 * ```typescript
 * const {live} = quantconnect({userId, token})
 *
 *
 * const {success, ...algorithmData} = await live.create({ projectId: 2134213, deployId: 'deploy-id-string' });
 * ```
 */
export type CreateLive = (
  params: CreateLiveParams
) => Promise<QuantConnectCreateLiveResponse>;

/**
 *
 * @description [Liquidate a live algorithm](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/update-live-algorithm/liquidate-live-portfolio)
 * @example
 * ```typescript
 * const {live} = quantconnect({userId, token})
 *
 * const {success} = await live.liquidate({ projectId: 2134213 });
 * ```
 */
export type LiquidateLive = (
  params: ReadProjectParams
) => Promise<QuantConnectResponse>;

/**
 *
 * @description [Stop a live algorithm](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/update-live-algorithm/stop-live-algorithm)
 * @example
 * ```typescript
 * const {live} = quantconnect({userId, token})
 *
 * const {success} = await live.stop({ projectId: 2134213 });
 * ```
 */
export type StopLive = (
  params: ReadProjectParams
) => Promise<QuantConnectResponse>;


export type ReadLivePortfolio = (params: ReadProjectParams) => Promise<QuantConnectResponse>;

export type ReadLiveOrders = (params: ReadLiveOrdersParams) => Promise<ReadLiveOrdersResponse>;
export type ReadLiveChart = (params: ReadLiveChartParams) => Promise<ReadLiveChartResponse>;
