# QuantConnect JS REST Client

## Important

**This is not an official API maintained by the QuantConnect team, and is in (VERY) early stages of development.** 

## General 

this is an open-source wrapper over the REST API described in [QuantConnect's documentation](https://www.quantconnect.com/docs/v2/our-platform/api-reference#)

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
- [Authenticate](https://www.quantconnect.com/docs/v2/our-platform/api-reference/authentication)
- Projects
  - [Create](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/create-project), [Read](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/read-project), [Update](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/update-project), [Delete](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/delete-project)
- Files
  - [Create](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/create-file), [Read](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/read-file), [Update](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/update-file), [Delete](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/delete-file)
- Live
  - [Read](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/get-live-algorithm-statistics)

## Roadmap

- [ ] **Tests tests tests**
- [ ] Documentation per endpoint
- [ ] Full return types from endpoints
- [ ] More endpoints parameters
  - [ ] Live `subscription` parameter
- [ ] More endpoints support:
  - [ ] Project management
  - [ ] Live (Create, Update)
  - [ ] Backtest management and reports
  - [ ] Compiling code
  - [ ] Downloading data