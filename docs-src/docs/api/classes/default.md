---
id: "default"
title: "Class: default"
sidebar_label: "default"
sidebar_position: 0
custom_edit_url: null
---

The main pmtile custom source

**`Param`**

## Hierarchy

- `VectorTileSourceImpl`

  ↳ **`default`**

## Constructors

### constructor

• **new default**(`...args`): [`default`](default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [id: string, implementation: PmTilesOptions, dispatcher: any, eventedParent: any] |

#### Returns

[`default`](default.md)

#### Overrides

VectorTileSourceImpl.constructor

#### Defined in

[index.ts:187](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L187)

## Properties

### \_collectResourceTiming

• **\_collectResourceTiming**: `boolean` = `false`

#### Defined in

[index.ts:166](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L166)

___

### \_dataType

• **\_dataType**: `string`

#### Defined in

[index.ts:162](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L162)

___

### \_implementation

• **\_implementation**: `PmTilesOptions`

#### Defined in

[index.ts:163](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L163)

___

### \_instance

• **\_instance**: `PMTiles`

#### Defined in

[index.ts:165](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L165)

___

### \_loaded

• **\_loaded**: `boolean`

#### Defined in

[index.ts:160](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L160)

___

### \_protocol

• **\_protocol**: `Protocol`

#### Defined in

[index.ts:164](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L164)

___

### \_tileJSONRequest

• **\_tileJSONRequest**: `undefined` \| `Promise`\<`any`\>

#### Defined in

[index.ts:167](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L167)

___

### \_tileWorkers

• **\_tileWorkers**: `Object`

#### Index signature

▪ [string: `string`]: `any`

#### Defined in

[index.ts:161](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L161)

___

### attribution

• **attribution**: `undefined` \| `string`

#### Defined in

[index.ts:143](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L143)

___

### contentType

• **contentType**: `string`

#### Defined in

[index.ts:171](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L171)

___

### dispatcher

• **dispatcher**: `any`

#### Defined in

[index.ts:155](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L155)

___

### fire

• **fire**: `Function`

#### Defined in

[index.ts:153](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L153)

___

### header

• **header**: `any`

#### Defined in

[index.ts:170](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L170)

___

### id

• **id**: `string`

#### Defined in

[index.ts:138](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L138)

___

### loadTile

• **loadTile**: (`tile`: `Tile`, `callback`: `Callback`\<`void`\>) => `void`

#### Type declaration

▸ (`tile`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | `Tile` |
| `callback` | `Callback`\<`void`\> |

##### Returns

`void`

#### Defined in

[index.ts:168](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L168)

___

### map

• **map**: `MapboxMap`

#### Defined in

[index.ts:145](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L145)

___

### maxTileCacheSize

• **maxTileCacheSize**: `undefined` \| `number`

#### Defined in

[index.ts:150](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L150)

___

### maxzoom

• **maxzoom**: `number`

#### Defined in

[index.ts:141](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L141)

___

### minTileCacheSize

• **minTileCacheSize**: `undefined` \| `number`

#### Defined in

[index.ts:149](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L149)

___

### minzoom

• **minzoom**: `number`

#### Defined in

[index.ts:140](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L140)

___

### promoteId

• **promoteId**: `undefined` \| `string`

#### Defined in

[index.ts:151](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L151)

___

### reparseOverscaled

• **reparseOverscaled**: `boolean`

#### Defined in

[index.ts:156](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L156)

___

### roundZoom

• **roundZoom**: `boolean` = `true`

#### Defined in

[index.ts:147](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L147)

___

### scheme

• **scheme**: `string`

#### Defined in

[index.ts:139](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L139)

___

### scope

• **scope**: `undefined` \| `string`

#### Defined in

[index.ts:154](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L154)

___

### setEventedParent

• **setEventedParent**: `any`

#### Defined in

[index.ts:157](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L157)

___

### tileBounds

• **tileBounds**: `undefined` \| `TileBounds`

#### Defined in

[index.ts:148](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L148)

___

### tileSize

• **tileSize**: `number`

#### Defined in

[index.ts:142](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L142)

___

### tileType

• **tileType**: `TileType`

#### Defined in

[index.ts:169](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L169)

___

### tiles

• **tiles**: `string`[]

#### Defined in

[index.ts:144](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L144)

___

### type

• **type**: `string` = `'vector'`

#### Defined in

[index.ts:152](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L152)

___

### SOURCE\_TYPE

▪ `Static` **SOURCE\_TYPE**: `string` = `SOURCE_TYPE`

#### Defined in

[index.ts:136](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L136)

## Methods

### hasTile

▸ **hasTile**(`tileID`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tileID` | `TileID` |

#### Returns

`boolean`

#### Defined in

[index.ts:229](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L229)

___

### load

▸ **load**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `Callback`\<`void`\> |

#### Returns

`void`

#### Defined in

[index.ts:232](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L232)

___

### loadRasterTile

▸ **loadRasterTile**(`tile`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | `Tile` |
| `callback` | `Callback`\<`void`\> |

#### Returns

`void`

#### Defined in

[index.ts:403](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L403)

___

### loadRasterTileData

▸ **loadRasterTileData**(`tile`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | `Tile` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:399](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L399)

___

### loadVectorTile

▸ **loadVectorTile**(`tile`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tile` | `Tile` |
| `callback` | `Callback`\<`void`\> |

#### Returns

`void`

#### Defined in

[index.ts:306](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L306)

___

### loaded

▸ **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[index.ts:303](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L303)

___

### zoomToExtent

▸ **zoomToExtent**(): `void`

#### Returns

`void`

#### Defined in

[index.ts:219](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L219)

___

### getMetadata

▸ **getMetadata**(`url`): `Promise`\<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The pmTiles URL |

#### Returns

`Promise`\<`any`\>

A Json object of the PmTile's metadata

#### Defined in

[index.ts:178](https://github.com/am2222/mapbox-pmtiles/blob/5e36f8c/src/index.ts#L178)
