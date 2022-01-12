# QuantConnect JS REST Client
[![NitayRabi](https://circleci.com/gh/NitayRabi/quantconnect-client.svg?style=svg)](https://app.circleci.com/pipelines/github/NitayRabi/quantconnect-client)

## Important

**This is not an official API maintained by the QuantConnect team, and is in (VERY) early stages of development.** 

## General 

An open-source wrapper over the REST API described in [QuantConnect's documentation](https://www.quantconnect.com/docs/v2/our-platform/api-reference#)

The API works both in Node.JS environment and browser environment.

## Installation 

### Using yarn:
```sh
yarn add quantconnect-client
```
### Using NPM:
```sh
npm install quantconnect-client
```

## Usage 

### Authentication

In order to authenticate you'll need an API key and token from QuantConnect, you can get these through your [QuantConnect account page](https://www.quantconnect.com/account), similar to using [LEAN CLI](https://www.quantconnect.com/docs/v2/lean-cli/api-reference/lean-login#01-Introduction)

### Usage Example

```ts
import quantconnect from "quantconnect-client";

// Keep these in a safe place
const userId = '';
const token = ''

const { live } = quantconnect({ userId: this.userId, token: this.token });

// result is your live running algorithms
const result = live.read({ status: "Running" })
```

## Supported endpoints

### See full reference in [modules](./docs/modules.md)

- [Authenticate](https://www.quantconnect.com/docs/v2/our-platform/api-reference/authentication)
- Projects
  - [Create](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/create-project)
  - [Read](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/read-project)
  - [Update](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/update-project)
  - [Delete](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/delete-project)
- Files
  - [Create](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/create-file)
  - [Read](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/read-file) 
  - [Update](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/update-file) 
  - [Delete](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/delete-file)
- Live
  - [Create](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/create-live-algorithm)
  - [Read](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/get-live-algorithm-statistics)
  - [Logs](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/read-live-algorithm-log)
  - [Liquidate](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/update-live-algorithm/liquidate-live-portfolio)
  - [Stop](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/update-live-algorithm/stop-live-algorithm)
  

## Roadmap

- [ ] **Tests tests tests**
- [ ] Full return types from endpoints
- [ ] More endpoints support:
  - [ ] Backtest management and reports
  - [ ] Compiling code
  - [ ] Downloading data