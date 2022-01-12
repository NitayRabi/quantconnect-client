import { ReadProjectParams } from "./projects";
import { QuantConnectResponse, PaginationParams } from "./core";

export type QuantConnectOrder = any;

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
   * No logs will be returned before this unixtime
   */
  start: number;
  /**
   * No logs will be returned after this unixtime.

   */
  end: number;
};

export type OrderEvent = {
  OrderId: number;
  Id: number;
  Symbol: {
    Value: string;
    ID: string;
    Permtick: string;
  };
  UtcTime: string;
  Status: {
    OrderId: number;
    Id: number;
    Symbol: {
      Value: string;
      ID: string;
      Permtick: string;
    };
    UtcTime: string;
    Status: string;
    FillPrice: number;
    FillPriceCurrency: string;
    FillQuantity: number;
    Direction: string;
    Message: string;
    IsAssignment: true;
    StopPrice: number;
    LimitPrice: number;
    Quantity: number;
  };
  OrderFee: {
    Value: {
      Amount: number;
      Currency: string;
    };
  };
  FillPrice: number;
  FillPriceCurrency: string;
  FillQuantity: number;
  Direction: string;
  Message: string;
  IsAssignment: true;
  StopPrice: number;
  LimitPrice: number;
  Quantity: number;
};

export type LiveResultsData = {
  Holdings: {
    Symbol: {
      Value: string;
      ID: string;
      Permtick: string;
    };
    Type: string;
    CurrencySymbol: string;
    AveragePrice: number;
    Quantity: number;
    MarketPrice: number;
    ConversionRate: number;
    MarketValue: number;
    UnrealizedPnl: number;
  };
  Cash: {
    _accountCurrency: string;
    _currencies: {
      _conversionRate: number;
      _isBaseCurrency: true;
      _invertRealTimePrice: true;
      Symbol: string;
      Amount: number;
      CurrencySymbol: string;
    };
    TotalValueInAccountCurrency: number;
    AccountCurrency: string;
  };
  AlphaRuntimeStatistics: {
    MeanPopulationScore: {
      UpdatedTimeUtc: string;
      Direction: number;
      Magnitude: number;
      IsFinalScore: true;
    };
    RollingAveragedPopulationScore: {
      UpdatedTimeUtc: string;
      Direction: number;
      Magnitude: number;
      IsFinalScore: true;
    };
    LongCount: string;
    ShortCount: string;
    LongShortRatio: number;
    TotalAccumulatedEstimatedAlphaValue: number;
    KellyCriterionEstimate: number;
    KellyCriterionProbabilityValue: number;
    FitnessScore: number;
    PortfolioTurnover: number;
    ReturnOverMaxDrawdown: number;
    SortinoRatio: number;
    EstimatedMonthlyAlphaValue: number;
    TotalInsightsGenerated: string;
    TotalInsightsClosed: string;
    TotalInsightsAnalysisCompleted: string;
    MeanPopulationEstimatedInsightValue: number;
  };
  Charts: {
    Name: string;
    ChartType: string;
    Series: {
      Name: string;
      Unit: string;
      Index: number;
      Values: [
        {
          x: string;
          y: number;
        }
      ];
      SeriesType: string;
      Color: string;
      ScatterMarkerSymbol: string;
    };
  };
  Orders: {
    Id: number;
    ContingentId: number;
    BrokerId: [string];
    Symbol: {
      Value: string;
      ID: string;
      Permtick: string;
    };
    Price: number;
    PriceCurrency: string;
    Time: string;
    CreatedTime: string;
    LastFillTime: string;
    LastUpdateTime: string;
    CanceledTime: string;
    Quantity: number;
    Type: string;
    Status: string;
    Tag: string;
    SecurityType: string;
    Direction: string;
    Value: number;
    OrderSubmissionData: {
      BidPrice: number;
      AskPrice: number;
      LastPrice: number;
    };
    IsMarketable: true;
  };
  OrderEvents: Array<OrderEvent>;
  ProfitLoss: number;
  Statistics: string;
  RuntimeStatistics: string;
  ServerStatistics: string;
};

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

export type QuantConnectLiveResponse = QuantConnectResponse & {
  LiveResults: {
    version: number;
    resolution: "second" | "10minutes" | "minute";
    results: LiveResultsData;
  };
};

export type QuantConnectLiveLogsResponse = QuantConnectResponse & {
  LiveLogs: Array<string>;
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
