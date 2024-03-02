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

export type OrderObject = {
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
  IsMarketable: boolean;
};

export type ChartsObject = {
  Name: string;
  ChartType: string;
  Series: Record<string, Series>;
};

export type Series = {
  Name: string;
  Unit: string;
  Index: number;
  Values: [
    {
      x: string;
      y: number;
    }
  ];
  SeriesType: number;
  Color: string;
  ScatterMarkerSymbol: string;
}

export type AlphaObject = {
  MeanPopulationScore: {
    UpdatedTimeUtc: string;
    Direction: number;
    Magnitude: number;
    IsFinalScore: boolean;
  };
  RollingAveragedPopulationScore: {
    UpdatedTimeUtc: string;
    Direction: number;
    Magnitude: number;
    IsFinalScore: boolean;
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

export type PerformanceObject = {
  TradeStatistics: {
    StartDateTime: string;
    EndDateTime: string;
    TotalNumberOfTrades: number;
    NumberOfWinningTrades: number;
    NumberOfLosingTrades: number;
    TotalProfitLoss: number;
    TotalProfit: number;
    TotalLoss: number;
    LargestProfit: number;
    LargestLoss: number;
    AverageProfitLoss: number;
    AverageProfit: number;
    AverageLoss: number;
    AverageTradeDuration: string;
    AverageWinningTradeDuration: string;
    AverageLosingTradeDuration: string;
    MedianTradeDuration: string;
    MedianWinningTradeDuration: string;
    MedianLosingTradeDuration: string;
    MaxConsecutiveWinningTrades: number;
    MaxConsecutiveLosingTrades: number;
    ProfitLossRatio: number;
    WinLossRatio: number;
    WinRate: number;
    LossRate: number;
    AverageMAE: number;
    AverageMFE: number;
    LargestMAE: number;
    LargestMFE: number;
    MaximumClosedTradeDrawdown: number;
    MaximumIntraTradeDrawdown: number;
    ProfitLossStandardDeviation: number;
    ProfitLossDownsideDeviation: number;
    ProfitFactor: number;
    SharpeRatio: number;
    SortinoRatio: number;
    ProfitToMaxDrawdownRatio: number;
    MaximumEndTradeDrawdown: number;
    AverageEndTradeDrawdown: number;
    MaximumDrawdownDuration: string;
    TotalFees: number;
  };
  PortfolioStatistics: {
    RiskFreeRate: number;
    AverageWinRate: number;
    AverageLossRate: number;
    ProfitLossRatio: number;
    WinRate: number;
    LossRate: number;
    Expectancy: number;
    CompoundingAnnualReturn: number;
    Drawdown: number;
    TotalNetProfit: number;
    SharpeRatio: number;
    ProbabilisticSharpeRatio: number;
    Alpha: number;
    Beta: number;
    AnnualStandardDeviation: number;
    AnnualVariance: number;
    InformationRatio: number;
    TrackingError: number;
    TreynorRatio: number;
  };
  ClosedTrades: [
    {
      Symbol: {
        Value: string;
        ID: string;
        Permtick: string;
      };
      EntryTime: string;
      EntryPrice: number;
      Direction: "Long";
      Quantity: number;
      ExitTime: string;
      ExitPrice: number;
      ProfitLoss: number;
      TotalFees: number;
      MAE: number;
      MFE: number;
      Duration: string;
      EndTradeDrawdown: number;
    }
  ];
};

export type ClosedTrade = {
  Symbol: {
    Value: string;
    ID: string;
    Permtick: string;
  };
  EntryTime: string;
  EntryPrice: number;
  Direction: "Long";
  Quantity: number;
  ExitTime: string;
  ExitPrice: number;
  ProfitLoss: number;
  TotalFees: number;
  MAE: number;
  MFE: number;
  Duration: string;
  EndTradeDrawdown: number;
};

export type BacktestModel = {
  name: string;
  note: string;
  backtestId: string;
  completed: boolean;
  progress: number;
  projectId: number;
  optimizationId: number;
  sparkline: string;
  sharpeRatio: number;
  alpha: number;
  beta: number;
  compoundingAnnualReturn: number;
  drawdown: number;
  lossRate: number;
  netProfit: number;
  parameterSet: Record<string, string>;
  psr: number;
  securityTypes: number;
  tradeableDates: number
  trades: number;
  treynorRatio: number;
  winRate: number;
  result: {
    RollingWindow: {
      TradeStatistics: {
        StartDateTime: string;
        EndDateTime: string;
        TotalNumberOfTrades: number;
        NumberOfWinningTrades: number;
        NumberOfLosingTrades: number;
        TotalProfitLoss: number;
        TotalProfit: number;
        TotalLoss: number;
        LargestProfit: number;
        LargestLoss: number;
        AverageProfitLoss: number;
        AverageProfit: number;
        AverageLoss: number;
        AverageTradeDuration: string;
        AverageWinningTradeDuration: string;
        AverageLosingTradeDuration: string;
        MedianTradeDuration: string;
        MedianWinningTradeDuration: string;
        MedianLosingTradeDuration: string;
        MaxConsecutiveWinningTrades: number;
        MaxConsecutiveLosingTrades: number;
        ProfitLossRatio: number;
        WinLossRatio: number;
        WinRate: number;
        LossRate: number;
        AverageMAE: number;
        AverageMFE: number;
        LargestMAE: number;
        LargestMFE: number;
        MaximumClosedTradeDrawdown: number;
        MaximumIntraTradeDrawdown: number;
        ProfitLossStandardDeviation: number;
        ProfitLossDownsideDeviation: number;
        ProfitFactor: number;
        SharpeRatio: number;
        SortinoRatio: number;
        ProfitToMaxDrawdownRatio: number;
        MaximumEndTradeDrawdown: number;
        AverageEndTradeDrawdown: number;
        MaximumDrawdownDuration: string;
        TotalFees: number;
      };
      PortfolioStatistics: {
        RiskFreeRate: number;
        AverageWinRate: number;
        AverageLossRate: number;
        ProfitLossRatio: number;
        WinRate: number;
        LossRate: number;
        Expectancy: number;
        CompoundingAnnualReturn: number;
        Drawdown: number;
        TotalNetProfit: number;
        SharpeRatio: number;
        ProbabilisticSharpeRatio: number;
        Alpha: number;
        Beta: number;
        AnnualStandardDeviation: number;
        AnnualVariance: number;
        InformationRatio: number;
        TrackingError: number;
        TreynorRatio: number;
      };
      ClosedTrades: Array<ClosedTrade>;
    };
    TotalPerformance: PerformanceObject;
    AlphaRuntimeStatistics: AlphaObject;
    Charts: ChartsObject;
    Orders: OrderObject;
    OrderEvents: Array<OrderEvent>;
    ProfitLoss: number;
    Statistics: string;
    RuntimeStatistics: string;
    ServerStatistics: string;
  };
  error?: string;
  stacktrace: string;
  created: string;
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
  AlphaRuntimeStatistics: AlphaObject;
  Charts: ChartsObject;
  Orders: OrderObject;
  OrderEvents: Array<OrderEvent>;
  ProfitLoss: number;
  Statistics: string;
  RuntimeStatistics: string;
  ServerStatistics: string;
};

export type Cash = {
  Symbol: string;
  Amount: number;
  ConversionRate: number;
  CurrencySymbol: string;
  ValueInAccountCurrency: number;
};
