[quantconnect-client](README.md) / Exports

# quantconnect-client

## Table of contents

### Functions

- [quantconnect](modules.md#quantconnect)

### References

- [default](modules.md#default)

### Type aliases

- [ReadBacktestParams](modules.md#readbacktestparams)
- [CreateBacktestParams](modules.md#createbacktestparams)
- [UpdateBacktestParams](modules.md#updatebacktestparams)
- [QuantConnectBacktestsResponse](modules.md#quantconnectbacktestsresponse)
- [ReadBacktest](modules.md#readbacktest)
- [CreateBacktest](modules.md#createbacktest)
- [UpdateBacktest](modules.md#updatebacktest)
- [DeleteBacktest](modules.md#deletebacktest)
- [QuantConnectResponse](modules.md#quantconnectresponse)
- [PaginationParams](modules.md#paginationparams)
- [Authenticate](modules.md#authenticate)
- [Method](modules.md#method)
- [QuantConnectClient](modules.md#quantconnectclient)
- [QuantConnectFile](modules.md#quantconnectfile)
- [CreateFileParams](modules.md#createfileparams)
- [ReadFileParams](modules.md#readfileparams)
- [UpdateFileNameParams](modules.md#updatefilenameparams)
- [UpdateFileContentParams](modules.md#updatefilecontentparams)
- [UpdateFileParams](modules.md#updatefileparams)
- [DeleteFileParams](modules.md#deletefileparams)
- [ReadFilesResponse](modules.md#readfilesresponse)
- [ReadFiles](modules.md#readfiles)
- [CreateFile](modules.md#createfile)
- [UpdateFile](modules.md#updatefile)
- [DeleteFile](modules.md#deletefile)
- [QuantConnectOrder](modules.md#quantconnectorder)
- [LiveAlgoStatus](modules.md#livealgostatus)
- [BrokerageType](modules.md#brokeragetype)
- [ReadLiveListParams](modules.md#readlivelistparams)
- [ReadLiveAlgoParams](modules.md#readlivealgoparams)
- [BrokerageEnvironment](modules.md#brokerageenvironment)
- [BaseLiveAlgorithmSettings](modules.md#baselivealgorithmsettings)
- [CreateLiveParams](modules.md#createliveparams)
- [ReadLiveParams](modules.md#readliveparams)
- [ReadLiveLogParams](modules.md#readlivelogparams)
- [LiveAlgoDescription](modules.md#livealgodescription)
- [QuantConnectLiveListResponse](modules.md#quantconnectlivelistresponse)
- [QuantConnectLiveResponse](modules.md#quantconnectliveresponse)
- [QuantConnectLiveLogsResponse](modules.md#quantconnectlivelogsresponse)
- [QuantConnectCreateLiveResponse](modules.md#quantconnectcreateliveresponse)
- [ReadLive](modules.md#readlive)
- [ReadLiveLog](modules.md#readlivelog)
- [CreateLive](modules.md#createlive)
- [LiquidateLive](modules.md#liquidatelive)
- [StopLive](modules.md#stoplive)
- [ProjectLanguage](modules.md#projectlanguage)
- [ProjectModel](modules.md#projectmodel)
- [ReadProjectParams](modules.md#readprojectparams)
- [CreateProjectParams](modules.md#createprojectparams)
- [UpdateProjectParams](modules.md#updateprojectparams)
- [QuantConnectProjectsResponse](modules.md#quantconnectprojectsresponse)
- [ReadProject](modules.md#readproject)
- [CreateProject](modules.md#createproject)
- [UpdateProject](modules.md#updateproject)
- [DeleteProject](modules.md#deleteproject)

## Functions

### quantconnect

▸ `Const` **quantconnect**(`config`): [`QuantConnectClient`](modules.md#quantconnectclient)

**`example`**
```typescript
import quantconnect from 'quantconnect-client';

const client = quantconnect({userId, token});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `QuantConnectConfig` | (userId, token). |

#### Returns

[`QuantConnectClient`](modules.md#quantconnectclient)

#### Defined in

[api.ts:59](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/api.ts#L59)

## References

### default

Renames and re-exports [quantconnect](modules.md#quantconnect)

## Type aliases

### ReadBacktestParams

Ƭ **ReadBacktestParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `backtestId?`: `string`  }

#### Defined in

types/backtests.ts:5

___

### CreateBacktestParams

Ƭ **CreateBacktestParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

types/backtests.ts:9

___

### UpdateBacktestParams

Ƭ **UpdateBacktestParams**: [`ReadBacktestParams`](modules.md#readbacktestparams) & { `name`: `string` ; `description`: `string`  }

#### Defined in

types/backtests.ts:13

___

### QuantConnectBacktestsResponse

Ƭ **QuantConnectBacktestsResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `backtests`: `BacktestModel`[]  }

#### Defined in

types/backtests.ts:18

___

### ReadBacktest

Ƭ **ReadBacktest**: (`params?`: [`ReadBacktestParams`](modules.md#readbacktestparams)) => `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Type declaration

▸ (`params?`): `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

**`description`** [Read a backtest(s)](https://www.quantconnect.com/docs/v2/our-platform/api-reference/backtest-management/read-backtest)

**`example`**
```typescript
const { backtests } = quantconnect({ userId, token })

const allBacktestsOfAProject = await backtests.read({ projectId: 2134213 });
const specificBacktests = await backtests.read({ projectId: 2134213, backtestId: 'some-id' });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ReadBacktestParams`](modules.md#readbacktestparams) |

##### Returns

`Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Defined in

types/backtests.ts:33

___

### CreateBacktest

Ƭ **CreateBacktest**: (`params`: [`CreateBacktestParams`](modules.md#createbacktestparams)) => `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

**`description`** [Create a backtest](https://www.quantconnect.com/docs/v2/our-platform/api-reference/backtest-management/create-backtest)

**`example`**
```typescript
const { backtests } = quantconnect({userId, token})

const { success } = await backtests.create({
     language: "Py",
      name: "Some project name",
   })
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateBacktestParams`](modules.md#createbacktestparams) |

##### Returns

`Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Defined in

types/backtests.ts:50

___

### UpdateBacktest

Ƭ **UpdateBacktest**: (`params`: [`UpdateBacktestParams`](modules.md#updatebacktestparams)) => `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

**`description`** [Update a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/update-project)

**`example`**
```typescript
const {projects} = quantconnect({userId, token})

 const {success} = await projects.update({
      description: "A new description",
      name: "New name",
      projectId: 21512,
    })
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateBacktestParams`](modules.md#updatebacktestparams) |

##### Returns

`Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Defined in

types/backtests.ts:68

___

### DeleteBacktest

Ƭ **DeleteBacktest**: (`params`: [`ReadBacktestParams`](modules.md#readbacktestparams)) => `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

**`description`** [Delete a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/delete-project)

**`example`**
```typescript
const {projects} = quantconnect({userId, token})

const {success} = await projects.delete({ projectId: 2134213 });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ReadBacktestParams`](modules.md#readbacktestparams) |

##### Returns

`Promise`<[`QuantConnectBacktestsResponse`](modules.md#quantconnectbacktestsresponse)\>

#### Defined in

types/backtests.ts:82

___

### QuantConnectResponse

Ƭ **QuantConnectResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors?` | `string`[] |
| `success` | `boolean` |

#### Defined in

[types/core.ts:1](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/core.ts#L1)

___

### PaginationParams

Ƭ **PaginationParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `start` | `string` |
| `end` | `string` |

#### Defined in

[types/core.ts:6](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/core.ts#L6)

___

### Authenticate

Ƭ **Authenticate**: () => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Type declaration

▸ (): `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

**`description`** [Authenticate a userId and token](https://www.quantconnect.com/docs/v2/our-platform/api-reference/authentication)

**`example`**
```typescript
const { authenticate } = quantconnect({userId, token});

const { success } = await authenticate();
```

##### Returns

`Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Defined in

[types/core.ts:20](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/core.ts#L20)

___

### Method

Ƭ **Method**<`Return`, `Params`\>: `Params` extends `undefined` ? (`params?`: `Params`) => `Promise`<`Return`\> : (`params`: `Params`) => `Promise`<`Return`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Return` | `Return` |
| `Params` | `undefined` |

#### Defined in

[types/endpoints.ts:36](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/endpoints.ts#L36)

___

### QuantConnectClient

Ƭ **QuantConnectClient**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authenticate` | [`Authenticate`](modules.md#authenticate) |
| `live` | `Object` |
| `live.read` | [`ReadLive`](modules.md#readlive) |
| `live.create` | [`CreateLive`](modules.md#createlive) |
| `live.stop` | [`StopLive`](modules.md#stoplive) |
| `live.liquidate` | [`LiquidateLive`](modules.md#liquidatelive) |
| `live.logs` | [`ReadLiveLog`](modules.md#readlivelog) |
| `files` | `Object` |
| `files.create` | [`CreateFile`](modules.md#createfile) |
| `files.read` | [`ReadFiles`](modules.md#readfiles) |
| `files.update` | [`UpdateFile`](modules.md#updatefile) |
| `files.delete` | [`DeleteFile`](modules.md#deletefile) |
| `projects` | `Object` |
| `projects.create` | [`CreateProject`](modules.md#createproject) |
| `projects.read` | [`ReadProject`](modules.md#readproject) |
| `projects.update` | [`UpdateProject`](modules.md#updateproject) |
| `projects.delete` | [`DeleteProject`](modules.md#deleteproject) |
| `backtests` | `Object` |
| `backtests.create` | [`CreateBacktest`](modules.md#createbacktest) |
| `backtests.read` | [`ReadBacktest`](modules.md#readbacktest) |
| `backtests.update` | [`UpdateBacktest`](modules.md#updatebacktest) |
| `backtests.delete` | [`DeleteBacktest`](modules.md#deletebacktest) |

#### Defined in

[types/endpoints.ts:40](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/endpoints.ts#L40)

___

### QuantConnectFile

Ƭ **QuantConnectFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `content` | `string` |
| `modified` | `string` |

#### Defined in

[types/files.ts:4](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L4)

___

### CreateFileParams

Ƭ **CreateFileParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `name`: `string` ; `content`: `string`  }

#### Defined in

[types/files.ts:10](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L10)

___

### ReadFileParams

Ƭ **ReadFileParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `name?`: `string`  }

#### Defined in

[types/files.ts:15](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L15)

___

### UpdateFileNameParams

Ƭ **UpdateFileNameParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `oldFileName`: `string` ; `newFileName`: `string`  }

#### Defined in

[types/files.ts:19](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L19)

___

### UpdateFileContentParams

Ƭ **UpdateFileContentParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `newFileContents` | `string` |

#### Defined in

[types/files.ts:24](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L24)

___

### UpdateFileParams

Ƭ **UpdateFileParams**: [`UpdateFileNameParams`](modules.md#updatefilenameparams) \| [`UpdateFileContentParams`](modules.md#updatefilecontentparams)

#### Defined in

[types/files.ts:29](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L29)

___

### DeleteFileParams

Ƭ **DeleteFileParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `name`: `string`  }

#### Defined in

[types/files.ts:31](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L31)

___

### ReadFilesResponse

Ƭ **ReadFilesResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `files`: [`QuantConnectFile`](modules.md#quantconnectfile)[]  }

#### Defined in

[types/files.ts:35](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L35)

___

### ReadFiles

Ƭ **ReadFiles**: (`params`: [`ReadFileParams`](modules.md#readfileparams)) => `Promise`<[`ReadFilesResponse`](modules.md#readfilesresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`ReadFilesResponse`](modules.md#readfilesresponse)\>

**`description`** [Read project's files](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/read-file)

**`example`**
```typescript
const { files } = quantconnect({ userId, token })

const {files, success} = await files.read({ projectId: 214512 });

// To filter by file name, pass the `name`
const {files, success} = await files.read({ projectId: 214512, name: 'main.py' });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ReadFileParams`](modules.md#readfileparams) |

##### Returns

`Promise`<[`ReadFilesResponse`](modules.md#readfilesresponse)\>

#### Defined in

[types/files.ts:51](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L51)

___

### CreateFile

Ƭ **CreateFile**: (`params`: [`CreateFileParams`](modules.md#createfileparams)) => `Promise`<[`ReadFilesResponse`](modules.md#readfilesresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`ReadFilesResponse`](modules.md#readfilesresponse)\>

**`description`** [Create a file](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/create-file)

**`example`**
```typescript
const {files} = quantconnect({userId, token})

const {files, success} = await files.create({
      "projectId": 0,
      "name": "main.py",
      "content": "string"
   })
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateFileParams`](modules.md#createfileparams) |

##### Returns

`Promise`<[`ReadFilesResponse`](modules.md#readfilesresponse)\>

#### Defined in

[types/files.ts:67](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L67)

___

### UpdateFile

Ƭ **UpdateFile**: (`params`: [`UpdateFileParams`](modules.md#updatefileparams)) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

**`description`** [Update a file](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/update-file)

**`example`**
```typescript
const {files} = quantconnect({userId, token})

// Update a file name
const {success} = await files.update({
      projectId: 0,
      oldFileName: "main.py",
      newFileName: "new.py",
    })

// Update a file content
const {success} = await files.update({
      projectId: 0,
      fileName: "main.py",
      newFileContents: "",
    })
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateFileParams`](modules.md#updatefileparams) |

##### Returns

`Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Defined in

[types/files.ts:93](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L93)

___

### DeleteFile

Ƭ **DeleteFile**: (`params`: [`DeleteFileParams`](modules.md#deletefileparams)) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

**`description`** [Delete a File](https://www.quantconnect.com/docs/v2/our-platform/api-reference/file-management/delete-file)

**`example`**
```typescript
const {files} = quantconnect({userId, token})

const {success} = await files.delete({ projectId: 2134213, name: 'main.py' });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeleteFileParams`](modules.md#deletefileparams) |

##### Returns

`Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Defined in

[types/files.ts:107](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/files.ts#L107)

___

### QuantConnectOrder

Ƭ **QuantConnectOrder**: `any`

#### Defined in

[types/live.ts:5](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L5)

___

### LiveAlgoStatus

Ƭ **LiveAlgoStatus**: ``"DeployError"`` \| ``"InQueue"`` \| ``"Running"`` \| ``"Stopped"`` \| ``"Liquidated"`` \| ``"Deleted"`` \| ``"Completed"`` \| ``"RuntimeError"`` \| ``"Invalid"`` \| ``"LoggingIn"`` \| ``"Initializing"`` \| ``"History"``

#### Defined in

[types/live.ts:7](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L7)

___

### BrokerageType

Ƭ **BrokerageType**: ``"Interactive"`` \| ``"FXCM"`` \| ``"Oanda"`` \| ``"Tradier"`` \| ``"PaperTrading"`` \| ``"Alpaca"`` \| ``"Bitfinex"`` \| ``"Binance"`` \| ``"GDAX"``

#### Defined in

[types/live.ts:21](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L21)

___

### ReadLiveListParams

Ƭ **ReadLiveListParams**: `Partial`<[`PaginationParams`](modules.md#paginationparams)\> & { `status`: [`LiveAlgoStatus`](modules.md#livealgostatus)  }

#### Defined in

[types/live.ts:32](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L32)

___

### ReadLiveAlgoParams

Ƭ **ReadLiveAlgoParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `deployId`: `string` ; `subscription?`: `string`  }

#### Defined in

[types/live.ts:36](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L36)

___

### BrokerageEnvironment

Ƭ **BrokerageEnvironment**: ``"live"`` \| ``"paper"``

#### Defined in

[types/live.ts:41](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L41)

___

### BaseLiveAlgorithmSettings

Ƭ **BaseLiveAlgorithmSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `user` | `string` |
| `environment` | [`BrokerageEnvironment`](modules.md#brokerageenvironment) |
| `password` | `string` |
| `account` | `string` |

#### Defined in

[types/live.ts:43](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L43)

___

### CreateLiveParams

Ƭ **CreateLiveParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `compileId`: `string` ; `serverType`: `string` ; `versionId`: `string` ; `baseLiveAlgorithmSettings`: [`BaseLiveAlgorithmSettings`](modules.md#baselivealgorithmsettings)  }

#### Defined in

[types/live.ts:51](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L51)

___

### ReadLiveParams

Ƭ **ReadLiveParams**: [`ReadLiveListParams`](modules.md#readlivelistparams) \| [`ReadLiveAlgoParams`](modules.md#readlivealgoparams)

#### Defined in

[types/live.ts:58](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L58)

___

### ReadLiveLogParams

Ƭ **ReadLiveLogParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `format`: `string` ; `algorithmId`: `string` ; `start`: `number` ; `end`: `number`  }

#### Defined in

[types/live.ts:59](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L59)

___

### LiveAlgoDescription

Ƭ **LiveAlgoDescription**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `projectId` | `number` |
| `deployId` | `string` |
| `status` | [`LiveAlgoStatus`](modules.md#livealgostatus) |
| `launched` | `string` |
| `stopped` | ``null`` |
| `brokerage` | `string` |
| `subscription` | `string` |
| `error?` | `string` |

#### Defined in

[types/live.ts:73](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L73)

___

### QuantConnectLiveListResponse

Ƭ **QuantConnectLiveListResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `live`: [`LiveAlgoDescription`](modules.md#livealgodescription)[]  }

#### Defined in

[types/live.ts:84](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L84)

___

### QuantConnectLiveResponse

Ƭ **QuantConnectLiveResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `LiveResults`: { `version`: `number` ; `resolution`: ``"second"`` \| ``"10minutes"`` \| ``"minute"`` ; `results`: `LiveResultsData`  }  }

#### Defined in

[types/live.ts:88](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L88)

___

### QuantConnectLiveLogsResponse

Ƭ **QuantConnectLiveLogsResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `LiveLogs`: `string`[]  }

#### Defined in

[types/live.ts:96](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L96)

___

### QuantConnectCreateLiveResponse

Ƭ **QuantConnectCreateLiveResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `projectId`: `number` ; `deployId`: `string` ; `status`: [`LiveAlgoStatus`](modules.md#livealgostatus) ; `launched`: `string` ; `stopped`: `string` ; `brokerage`: [`BrokerageType`](modules.md#brokeragetype) ; `subscription`: `string` ; `error?`: `string`  }

#### Defined in

[types/live.ts:100](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L100)

___

### ReadLive

Ƭ **ReadLive**: <T\>(`params`: `T`) => `Promise`<`T` extends [`ReadLiveAlgoParams`](modules.md#readlivealgoparams) ? [`QuantConnectLiveResponse`](modules.md#quantconnectliveresponse) : [`QuantConnectLiveListResponse`](modules.md#quantconnectlivelistresponse)\>

#### Type declaration

▸ <`T`\>(`params`): `Promise`<`T` extends [`ReadLiveAlgoParams`](modules.md#readlivealgoparams) ? [`QuantConnectLiveResponse`](modules.md#quantconnectliveresponse) : [`QuantConnectLiveListResponse`](modules.md#quantconnectlivelistresponse)\>

**`description`** [Get live algorithm(s) data](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/get-live-algorithm-statistics)

**`example`**
```typescript
const {live} = quantconnect({userId, token})

// Single algorithm reading
const liveAlgorithmData = await live.read({ projectId: 2134213, deployId: 'deploy-id-string' });

// List of running algorithms
const allRunningAlgorithms = await live.read({ "status": "Running" })
```

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ReadLiveListParams`](modules.md#readlivelistparams) \| [`ReadLiveAlgoParams`](modules.md#readlivealgoparams) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `T` |

##### Returns

`Promise`<`T` extends [`ReadLiveAlgoParams`](modules.md#readlivealgoparams) ? [`QuantConnectLiveResponse`](modules.md#quantconnectliveresponse) : [`QuantConnectLiveListResponse`](modules.md#quantconnectlivelistresponse)\>

#### Defined in

[types/live.ts:125](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L125)

___

### ReadLiveLog

Ƭ **ReadLiveLog**: (`params`: [`ReadLiveLogParams`](modules.md#readlivelogparams)) => `Promise`<[`QuantConnectLiveLogsResponse`](modules.md#quantconnectlivelogsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectLiveLogsResponse`](modules.md#quantconnectlivelogsresponse)\>

**`description`** [Get live algorithm log](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/read-live-algorithm/read-live-algorithm-log)

**`example`**
```typescript
const {live} = quantconnect({userId, token})

const {LiveLogs} = await live.log({ "format": "json",
  "projectId": 0,
  "algorithmId": "string",
  "start": 0,
  "end": 0});
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ReadLiveLogParams`](modules.md#readlivelogparams) |

##### Returns

`Promise`<[`QuantConnectLiveLogsResponse`](modules.md#quantconnectlivelogsresponse)\>

#### Defined in

[types/live.ts:147](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L147)

___

### CreateLive

Ƭ **CreateLive**: (`params`: [`CreateLiveParams`](modules.md#createliveparams)) => `Promise`<[`QuantConnectCreateLiveResponse`](modules.md#quantconnectcreateliveresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectCreateLiveResponse`](modules.md#quantconnectcreateliveresponse)\>

**`description`** [Create a live algorithm](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/create-live-algorithm)

**`example`**
```typescript
const {live} = quantconnect({userId, token})

const {success, ...algorithmData} = await live.create({ projectId: 2134213, deployId: 'deploy-id-string' });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateLiveParams`](modules.md#createliveparams) |

##### Returns

`Promise`<[`QuantConnectCreateLiveResponse`](modules.md#quantconnectcreateliveresponse)\>

#### Defined in

[types/live.ts:162](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L162)

___

### LiquidateLive

Ƭ **LiquidateLive**: (`params`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

**`description`** [Liquidate a live algorithm](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/update-live-algorithm/liquidate-live-portfolio)

**`example`**
```typescript
const {live} = quantconnect({userId, token})

const {success} = await live.liquidate({ projectId: 2134213 });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ReadProjectParams`](modules.md#readprojectparams) |

##### Returns

`Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Defined in

[types/live.ts:176](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L176)

___

### StopLive

Ƭ **StopLive**: (`params`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

**`description`** [Stop a live algorithm](https://www.quantconnect.com/docs/v2/our-platform/api-reference/live-management/update-live-algorithm/stop-live-algorithm)

**`example`**
```typescript
const {live} = quantconnect({userId, token})

const {success} = await live.stop({ projectId: 2134213 });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ReadProjectParams`](modules.md#readprojectparams) |

##### Returns

`Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\>

#### Defined in

[types/live.ts:190](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/live.ts#L190)

___

### ProjectLanguage

Ƭ **ProjectLanguage**: ``"C#"`` \| ``"Py"``

#### Defined in

[types/projects.ts:3](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L3)

___

### ProjectModel

Ƭ **ProjectModel**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `projectId` | `number` |
| `name` | `string` |
| `created` | `string` |
| `modified` | `string` |
| `language` | [`ProjectLanguage`](modules.md#projectlanguage) |

#### Defined in

[types/projects.ts:5](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L5)

___

### ReadProjectParams

Ƭ **ReadProjectParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `projectId` | `number` |

#### Defined in

[types/projects.ts:13](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L13)

___

### CreateProjectParams

Ƭ **CreateProjectParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `language` | [`ProjectLanguage`](modules.md#projectlanguage) |

#### Defined in

[types/projects.ts:17](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L17)

___

### UpdateProjectParams

Ƭ **UpdateProjectParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `name`: `string` ; `description`: `string`  }

#### Defined in

[types/projects.ts:22](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L22)

___

### QuantConnectProjectsResponse

Ƭ **QuantConnectProjectsResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `projects`: [`ProjectModel`](modules.md#projectmodel)[]  }

#### Defined in

[types/projects.ts:27](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L27)

___

### ReadProject

Ƭ **ReadProject**: (`params?`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Type declaration

▸ (`params?`): `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

**`description`** [Read a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/read-project)

**`example`**
```typescript
const { projects } = quantconnect({ userId, token })

const allProjects = await projects.read();
const specificProject = await projects.read({ projectId: 2134213 });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`ReadProjectParams`](modules.md#readprojectparams) |

##### Returns

`Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Defined in

[types/projects.ts:42](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L42)

___

### CreateProject

Ƭ **CreateProject**: (`params`: [`CreateProjectParams`](modules.md#createprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

**`description`** [Create a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/create-project)

**`example`**
```typescript
const {projects} = quantconnect({userId, token})

const {success} = await projects.create({
     language: "Py",
      name: "Some project name",
   })
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CreateProjectParams`](modules.md#createprojectparams) |

##### Returns

`Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Defined in

[types/projects.ts:59](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L59)

___

### UpdateProject

Ƭ **UpdateProject**: (`params`: [`UpdateProjectParams`](modules.md#updateprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

**`description`** [Update a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/update-project)

**`example`**
```typescript
const {projects} = quantconnect({userId, token})

 const {success} = await projects.update({
      description: "A new description",
      name: "New name",
      projectId: 21512,
    })
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UpdateProjectParams`](modules.md#updateprojectparams) |

##### Returns

`Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Defined in

[types/projects.ts:77](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L77)

___

### DeleteProject

Ƭ **DeleteProject**: (`params`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Type declaration

▸ (`params`): `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

**`description`** [Delete a project](https://www.quantconnect.com/docs/v2/our-platform/api-reference/project-management/delete-project)

**`example`**
```typescript
const {projects} = quantconnect({userId, token})

const {success} = await projects.delete({ projectId: 2134213 });
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ReadProjectParams`](modules.md#readprojectparams) |

##### Returns

`Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\>

#### Defined in

[types/projects.ts:91](https://github.com/NitayRabi/quantconnect-client/blob/2f9874e/src/types/projects.ts#L91)
