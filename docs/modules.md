[quantconnect-client](README.md) / Exports

# quantconnect-client

## Table of contents

### References

- [default](modules.md#default)

### Type aliases

- [BaseLiveAlgorithmSettings](modules.md#baselivealgorithmsettings)
- [BrokerageEnvironment](modules.md#brokerageenvironment)
- [BrokerageType](modules.md#brokeragetype)
- [CreateLiveParams](modules.md#createliveparams)
- [CreateProjectParams](modules.md#createprojectparams)
- [EndpointDescription](modules.md#endpointdescription)
- [EndpointMethod](modules.md#endpointmethod)
- [EndpointToInterface](modules.md#endpointtointerface)
- [LiveAlgoStatus](modules.md#livealgostatus)
- [PaginationParams](modules.md#paginationparams)
- [QuantConnectCreateLiveResponse](modules.md#quantconnectcreateliveresponse)
- [QuantConnectLiveResponse](modules.md#quantconnectliveresponse)
- [QuantConnectOrder](modules.md#quantconnectorder)
- [QuantConnectProject](modules.md#quantconnectproject)
- [QuantConnectProjectsResponse](modules.md#quantconnectprojectsresponse)
- [QuantConnectResponse](modules.md#quantconnectresponse)
- [QuantConnectVersion](modules.md#quantconnectversion)
- [ReadLiveAlgoParams](modules.md#readlivealgoparams)
- [ReadLiveListParams](modules.md#readlivelistparams)
- [ReadLiveParams](modules.md#readliveparams)
- [ReadProjectParams](modules.md#readprojectparams)
- [UpdateProjectParams](modules.md#updateprojectparams)

### Functions

- [quantconnect](modules.md#quantconnect)

## References

### default

Renames and re-exports [quantconnect](modules.md#quantconnect)

## Type aliases

### BaseLiveAlgorithmSettings

Ƭ **BaseLiveAlgorithmSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `environment` | [`BrokerageEnvironment`](modules.md#brokerageenvironment) |
| `id` | `string` |
| `password` | `string` |
| `user` | `string` |

#### Defined in

[types/live.ts:42](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L42)

___

### BrokerageEnvironment

Ƭ **BrokerageEnvironment**: ``"live"`` \| ``"paper"``

#### Defined in

[types/live.ts:40](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L40)

___

### BrokerageType

Ƭ **BrokerageType**: ``"Interactive"`` \| ``"FXCM"`` \| ``"Oanda"`` \| ``"Tradier"`` \| ``"PaperTrading"`` \| ``"Alpaca"`` \| ``"Bitfinex"`` \| ``"Binance"`` \| ``"GDAX"``

#### Defined in

[types/live.ts:20](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L20)

___

### CreateLiveParams

Ƭ **CreateLiveParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `baseLiveAlgorithmSettings`: [`BaseLiveAlgorithmSettings`](modules.md#baselivealgorithmsettings) ; `compileId`: `string` ; `serverType`: `string` ; `versionId`: `string`  }

#### Defined in

[types/live.ts:50](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L50)

___

### CreateProjectParams

Ƭ **CreateProjectParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `language` | ``"C#"`` \| ``"Py"`` |
| `name` | `string` |

#### Defined in

[types/projects.ts:11](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/projects.ts#L11)

___

### EndpointDescription

Ƭ **EndpointDescription**<`Params`, `Response`, `ParamsRequired`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | `Params` |
| `Response` | `Response` |
| `ParamsRequired` | extends `boolean` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `Params` |
| `paramsRequired` | `ParamsRequired` |
| `response` | `Response` |

#### Defined in

[types/endpoints.ts:26](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/endpoints.ts#L26)

___

### EndpointMethod

Ƭ **EndpointMethod**<`T`\>: `T`[``"paramsRequired"``] extends ``true`` ? (`params`: `T`[``"params"``]) => `Promise`<`T`[``"response"``]\> : (`params?`: `T`[``"params"``]) => `Promise`<`T`[``"response"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointDescription`](modules.md#endpointdescription)<`any`, `any`, `any`\> |

#### Defined in

[types/endpoints.ts:21](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/endpoints.ts#L21)

___

### EndpointToInterface

Ƭ **EndpointToInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authenticate` | [`EndpointDescription`](modules.md#endpointdescription)<`never`, [`QuantConnectResponse`](modules.md#quantconnectresponse), ``false``\> |
| `files/create` | [`EndpointDescription`](modules.md#endpointdescription)<`CreateFileParams`, [`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse), ``true``\> |
| `files/delete` | [`EndpointDescription`](modules.md#endpointdescription)<`DeleteFileParams`, [`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse), ``true``\> |
| `files/read` | [`EndpointDescription`](modules.md#endpointdescription)<`ReadFileParams`, `never`, ``false``\> |
| `files/update` | [`EndpointDescription`](modules.md#endpointdescription)<`UpdateFileParams`, `never`, ``true``\> |
| `live/create` | [`EndpointDescription`](modules.md#endpointdescription)<[`CreateLiveParams`](modules.md#createliveparams), [`QuantConnectCreateLiveResponse`](modules.md#quantconnectcreateliveresponse), ``true``\> |
| `live/read` | [`EndpointDescription`](modules.md#endpointdescription)<[`ReadLiveParams`](modules.md#readliveparams), [`QuantConnectLiveResponse`](modules.md#quantconnectliveresponse), ``true``\> |
| `live/update/liquidate` | [`EndpointDescription`](modules.md#endpointdescription)<[`ReadProjectParams`](modules.md#readprojectparams), [`QuantConnectResponse`](modules.md#quantconnectresponse), ``true``\> |
| `live/update/stop` | [`EndpointDescription`](modules.md#endpointdescription)<[`ReadProjectParams`](modules.md#readprojectparams), [`QuantConnectResponse`](modules.md#quantconnectresponse), ``true``\> |
| `projects/create` | [`EndpointDescription`](modules.md#endpointdescription)<[`CreateProjectParams`](modules.md#createprojectparams), [`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse), ``true``\> |
| `projects/delete` | [`EndpointDescription`](modules.md#endpointdescription)<[`ReadProjectParams`](modules.md#readprojectparams), `never`, ``true``\> |
| `projects/read` | [`EndpointDescription`](modules.md#endpointdescription)<[`ReadProjectParams`](modules.md#readprojectparams), [`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse), ``false``\> |
| `projects/update` | [`EndpointDescription`](modules.md#endpointdescription)<[`UpdateProjectParams`](modules.md#updateprojectparams), [`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse), ``true``\> |

#### Defined in

[types/endpoints.ts:36](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/endpoints.ts#L36)

___

### LiveAlgoStatus

Ƭ **LiveAlgoStatus**: ``"DeployError"`` \| ``"InQueue"`` \| ``"Running"`` \| ``"Stopped"`` \| ``"Liquidated"`` \| ``"Deleted"`` \| ``"Completed"`` \| ``"RuntimeError"`` \| ``"Invalid"`` \| ``"LoggingIn"`` \| ``"Initializing"`` \| ``"History"``

#### Defined in

[types/live.ts:6](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L6)

___

### PaginationParams

Ƭ **PaginationParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | `string` |
| `start` | `string` |

#### Defined in

[types/core.ts:6](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/core.ts#L6)

___

### QuantConnectCreateLiveResponse

Ƭ **QuantConnectCreateLiveResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `brokerage`: [`BrokerageType`](modules.md#brokeragetype) ; `deployId`: `string` ; `error?`: `string` ; `launched`: `string` ; `projectId`: `number` ; `status`: [`LiveAlgoStatus`](modules.md#livealgostatus) ; `stopped`: `string` ; `subscription`: `string`  }

#### Defined in

[types/live.ts:63](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L63)

___

### QuantConnectLiveResponse

Ƭ **QuantConnectLiveResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `live`: `any`[]  }

#### Defined in

[types/live.ts:59](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L59)

___

### QuantConnectOrder

Ƭ **QuantConnectOrder**: `any`

#### Defined in

[types/live.ts:4](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L4)

___

### QuantConnectProject

Ƭ **QuantConnectProject**: `any`

#### Defined in

[types/projects.ts:4](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/projects.ts#L4)

___

### QuantConnectProjectsResponse

Ƭ **QuantConnectProjectsResponse**: [`QuantConnectResponse`](modules.md#quantconnectresponse) & { `projects`: [`QuantConnectProject`](modules.md#quantconnectproject)[] ; `versions`: [`QuantConnectVersion`](modules.md#quantconnectversion)[]  }

#### Defined in

[types/projects.ts:22](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/projects.ts#L22)

___

### QuantConnectResponse

Ƭ **QuantConnectResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors?` | `string`[] |
| `success` | `boolean` |

#### Defined in

[types/core.ts:1](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/core.ts#L1)

___

### QuantConnectVersion

Ƭ **QuantConnectVersion**: `any`

#### Defined in

[types/projects.ts:5](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/projects.ts#L5)

___

### ReadLiveAlgoParams

Ƭ **ReadLiveAlgoParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `deployId`: `string` ; `subscription?`: `string`  }

#### Defined in

[types/live.ts:35](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L35)

___

### ReadLiveListParams

Ƭ **ReadLiveListParams**: `Partial`<[`PaginationParams`](modules.md#paginationparams)\> & { `status`: [`LiveAlgoStatus`](modules.md#livealgostatus)  }

#### Defined in

[types/live.ts:31](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L31)

___

### ReadLiveParams

Ƭ **ReadLiveParams**: [`ReadLiveListParams`](modules.md#readlivelistparams) \| [`ReadLiveAlgoParams`](modules.md#readlivealgoparams)

#### Defined in

[types/live.ts:57](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/live.ts#L57)

___

### ReadProjectParams

Ƭ **ReadProjectParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `projectId` | `number` |

#### Defined in

[types/projects.ts:7](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/projects.ts#L7)

___

### UpdateProjectParams

Ƭ **UpdateProjectParams**: [`ReadProjectParams`](modules.md#readprojectparams) & { `description`: `string` ; `name`: `string`  }

#### Defined in

[types/projects.ts:16](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/types/projects.ts#L16)

## Functions

### quantconnect

▸ `Const` **quantconnect**(`config`): `Object`

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

`Object`

| Name | Type |
| :------ | :------ |
| `authenticate` | (`params?`: `undefined`) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\> |
| `files` | `Object` |
| `files.create` | (`params`: `CreateFileParams`) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\> |
| `files.delete` | (`params`: `DeleteFileParams`) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\> |
| `files.read` | (`params?`: `ReadFileParams`) => `Promise`<`never`\> |
| `files.update` | (`params`: `UpdateFileParams`) => `Promise`<`never`\> |
| `live` | `Object` |
| `live.create` | (`params`: [`CreateLiveParams`](modules.md#createliveparams)) => `Promise`<[`QuantConnectCreateLiveResponse`](modules.md#quantconnectcreateliveresponse)\> |
| `live.liquidate` | (`params`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\> |
| `live.read` | (`params`: [`ReadLiveParams`](modules.md#readliveparams)) => `Promise`<[`QuantConnectLiveResponse`](modules.md#quantconnectliveresponse)\> |
| `live.stop` | (`params`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectResponse`](modules.md#quantconnectresponse)\> |
| `projects` | `Object` |
| `projects.create` | (`params`: [`CreateProjectParams`](modules.md#createprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\> |
| `projects.delete` | (`params`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<`never`\> |
| `projects.read` | (`params?`: [`ReadProjectParams`](modules.md#readprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\> |
| `projects.update` | (`params`: [`UpdateProjectParams`](modules.md#updateprojectparams)) => `Promise`<[`QuantConnectProjectsResponse`](modules.md#quantconnectprojectsresponse)\> |

#### Defined in

[api.ts:35](https://github.com/NitayRabi/quantconnect-client/blob/65a57d5/src/api.ts#L35)
