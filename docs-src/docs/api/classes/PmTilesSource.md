---
id: "PmTilesSource"
title: "Class: PmTilesSource"
sidebar_label: "PmTilesSource"
sidebar_position: 0
custom_edit_url: null
---

The PmTiles source. It mainly should work as a regular source as other mapbox sources.

**`Remarks`**

The Source will automatically set its type [vector|raster] based on the type defined in the pmTiles metadata. The different PmTiles 
data type is defined as here: [https://github.com/protomaps/PMTiles/blob/main/spec/v3/spec.md#tile-type-tt](https://github.com/protomaps/PMTiles/blob/main/spec/v3/spec.md#tile-type-tt). We also use the
rest of the headers to set source boundary. This includes `minZoom`, `maxZoom`, `minLon`, `minLat`, `maxLon` and `maxLat`  if they are
available.

**`Param`**

The unique id of the source

**`Param`**

The  main pmtiles options

**`Param`**

**`Param`**

**`Example`**

```js
import mapboxgl from "mapbox-gl";

import { PmTilesSource } from "mapbox-pmtiles";
//Define custom source
mapboxgl.Style.setSourceType(PmTilesSource.SOURCE_TYPE, PmTilesSource);

map.on("load", () => {

const PMTILES_URL =
   "https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles";

    map.addSource("pmTileSourceName", {
    type: PmTilesSource.SOURCE_TYPE, //Add this line
    url: PMTILES_URL,
    maxzoom: 10,
    });

    map.current.showTileBoundaries = true;
    map.current.addLayer({
        id: "places",
        source: "pmTileSourceName",
        "source-layer": "places",
        type: "circle",
        paint: {
            "circle-color": "steelblue",
        },
        maxzoom: 14,
    });
});
    
```

## Hierarchy

- `VectorTileSourceImpl`

  ↳ **`PmTilesSource`**

## Constructors

### constructor

• **new PmTilesSource**(`id`, `options`, `_dispatcher`, `_eventedParent`): [`PmTilesSource`](PmTilesSource.md)

The PmTiles source. It mainly should work as a regular source as other mapbox sources.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The unique id of the source |
| `options` | `PmTilesOptions` | The main pmtiles options |
| `_dispatcher` | `any` |  |
| `_eventedParent` | `any` |  |

#### Returns

[`PmTilesSource`](PmTilesSource.md)

**`Remarks`**

The Source will automatically set its type [vector|raster] based on the type defined in the pmTiles metadata. The different PmTiles 
data type is defined as here: [https://github.com/protomaps/PMTiles/blob/main/spec/v3/spec.md#tile-type-tt](https://github.com/protomaps/PMTiles/blob/main/spec/v3/spec.md#tile-type-tt). We also use the
rest of the headers to set source boundary. This includes `minZoom`, `maxZoom`, `minLon`, `minLat`, `maxLon` and `maxLat`  if they are
available.

**`Example`**

```js
import mapboxgl from "mapbox-gl";

import { PmTilesSource } from "mapbox-pmtiles";
//Define custom source
mapboxgl.Style.setSourceType(PmTilesSource.SOURCE_TYPE, PmTilesSource);

map.on("load", () => {

const PMTILES_URL =
   "https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles";

    map.addSource("pmTileSourceName", {
    type: PmTilesSource.SOURCE_TYPE, //Add this line
    url: PMTILES_URL,
    maxzoom: 10,
    });

    map.current.showTileBoundaries = true;
    map.current.addLayer({
        id: "places",
        source: "pmTileSourceName",
        "source-layer": "places",
        type: "circle",
        paint: {
            "circle-color": "steelblue",
        },
        maxzoom: 14,
    });
});
    
```

#### Overrides

VectorTileSourceImpl.constructor

#### Defined in

[index.ts:287](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L287)

## Properties

### \_dataType

• **\_dataType**: `string`

#### Defined in

[index.ts:210](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L210)

___

### \_implementation

• **\_implementation**: `PmTilesOptions`

#### Defined in

[index.ts:211](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L211)

___

### \_instance

• **\_instance**: `PMTiles`

#### Defined in

[index.ts:213](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L213)

___

### \_loaded

• **\_loaded**: `boolean`

#### Defined in

[index.ts:208](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L208)

___

### \_protocol

• **\_protocol**: `Protocol`

#### Defined in

[index.ts:212](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L212)

___

### \_tileJSONRequest

• **\_tileJSONRequest**: `undefined` \| `Promise`\<`any`\>

#### Defined in

[index.ts:214](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L214)

___

### \_tileWorkers

• **\_tileWorkers**: `Object`

#### Index signature

▪ [string: `string`]: `any`

#### Defined in

[index.ts:209](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L209)

___

### attribution

• **attribution**: `undefined` \| `string`

#### Defined in

[index.ts:191](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L191)

___

### contentType

• **contentType**: `string`

#### Defined in

[index.ts:218](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L218)

___

### dispatcher

• **dispatcher**: `any`

#### Defined in

[index.ts:203](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L203)

___

### fire

• **fire**: `Function`

#### Defined in

[index.ts:201](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L201)

___

### header

• **header**: `any`

#### Defined in

[index.ts:217](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L217)

___

### id

• **id**: `string`

#### Defined in

[index.ts:186](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L186)

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

[index.ts:215](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L215)

___

### map

• **map**: `MapboxMap`

#### Defined in

[index.ts:193](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L193)

___

### maxTileCacheSize

• **maxTileCacheSize**: `undefined` \| `number`

#### Defined in

[index.ts:198](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L198)

___

### maxzoom

• **maxzoom**: `number`

#### Defined in

[index.ts:189](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L189)

___

### minTileCacheSize

• **minTileCacheSize**: `undefined` \| `number`

#### Defined in

[index.ts:197](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L197)

___

### minzoom

• **minzoom**: `number`

#### Defined in

[index.ts:188](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L188)

___

### promoteId

• **promoteId**: `undefined` \| `string`

#### Defined in

[index.ts:199](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L199)

___

### reparseOverscaled

• **reparseOverscaled**: `boolean`

#### Defined in

[index.ts:204](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L204)

___

### roundZoom

• **roundZoom**: `boolean` = `true`

#### Defined in

[index.ts:195](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L195)

___

### scheme

• **scheme**: `string`

#### Defined in

[index.ts:187](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L187)

___

### scope

• **scope**: `undefined` \| `string`

#### Defined in

[index.ts:202](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L202)

___

### setEventedParent

• **setEventedParent**: `any`

#### Defined in

[index.ts:205](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L205)

___

### tileBounds

• **tileBounds**: `undefined` \| `TileBounds`

#### Defined in

[index.ts:196](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L196)

___

### tileSize

• **tileSize**: `number`

#### Defined in

[index.ts:190](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L190)

___

### tileType

• **tileType**: `TileType`

#### Defined in

[index.ts:216](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L216)

___

### tiles

• **tiles**: `string`[]

#### Defined in

[index.ts:192](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L192)

___

### type

• **type**: `string` = `'vector'`

#### Defined in

[index.ts:200](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L200)

___

### SOURCE\_TYPE

▪ `Static` **SOURCE\_TYPE**: `string` = `SOURCE_TYPE`

#### Defined in

[index.ts:184](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L184)

## Methods

### getExtent

▸ **getExtent**(): `LngLatBoundsLike`

the extent of the entire source extracted from pmtiles header

#### Returns

`LngLatBoundsLike`

#### Defined in

[index.ts:324](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L324)

___

### hasTile

▸ **hasTile**(`tileID`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tileID` | `TileID` |

#### Returns

`boolean`

#### Defined in

[index.ts:330](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L330)

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

[index.ts:333](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L333)

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

[index.ts:497](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L497)

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

[index.ts:493](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L493)

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

[index.ts:409](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L409)

___

### loaded

▸ **loaded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[index.ts:405](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L405)

___

### getHeader

▸ **getHeader**(`url`): `Promise`\<`any`\>

An static function to get the header of an pmtiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The pmTiles URL |

#### Returns

`Promise`\<`any`\>

A Json object of the PmTile's header

#### Defined in

[index.ts:236](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L236)

___

### getMetadata

▸ **getMetadata**(`url`): `Promise`\<`any`\>

An static function to get the metadata of a pmtiles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The pmTiles URL |

#### Returns

`Promise`\<`any`\>

A Json object of the PmTile's metadata

#### Defined in

[index.ts:226](https://github.com/am2222/mapbox-pmtiles/blob/bf8a5c84/src/index.ts#L226)
