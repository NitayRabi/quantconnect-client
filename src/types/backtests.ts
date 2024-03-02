import { ReadProjectParams } from "./projects";
import { QuantConnectResponse } from "./core";
import { BacktestModel } from "./models";

export type ReadBacktestParams = ReadProjectParams & {
  backtestId?: string;
  includeStatistics?: boolean;
};

export type CreateBacktestParams = {
  name: string;
};

export type UpdateBacktestParams = ReadBacktestParams & {
  name: string;
  description: string;
};

export type QuantConnectBacktestsResponse = QuantConnectResponse & {
  backtests: Array<BacktestModel>;
};

/**
 *
 * @description [Read a backtest(s)](https://www.quantconnect.com/docs/v2/our-platform/api-reference/backtest-management/read-backtest)
 * @example
 * ```typescript
 * const { backtests } = quantconnect({ userId, token })
 *
 * const allBacktestsOfAProject = await backtests.read({ projectId: 2134213 });
 * const specificBacktests = await backtests.read({ projectId: 2134213, backtestId: 'some-id' });
 * ```
 */
export type ReadBacktest = (
  params?: ReadBacktestParams
) => Promise<QuantConnectBacktestsResponse>;

/**
 *
 * @description [Create a backtest](https://www.quantconnect.com/docs/v2/our-platform/api-reference/backtest-management/create-backtest)
 * @example
 * ```typescript
 * const { backtests } = quantconnect({userId, token})
 *
 * const { success } = await backtests.create({
 *      language: "Py",
 *       name: "Some project name",
 *    })
 * ```
 */
export type CreateBacktest = (
  params: CreateBacktestParams
) => Promise<QuantConnectBacktestsResponse>;

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
export type UpdateBacktest = (
  params: UpdateBacktestParams
) => Promise<QuantConnectBacktestsResponse>;

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
export type DeleteBacktest = (
  params: ReadBacktestParams
) => Promise<QuantConnectBacktestsResponse>;
