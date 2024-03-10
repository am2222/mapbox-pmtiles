import mapboxgl from "mapbox-gl";
import { PMTiles, Protocol, TileType } from "pmtiles";
export declare const SOURCE_TYPE = "pmtile-source";
declare class TileBounds {
    bounds: mapboxgl.LngLatBounds;
    minzoom: number;
    maxzoom: number;
    constructor(bounds: mapboxgl.LngLatBoundsLike, minzoom: number, maxzoom: number);
    validateBounds(bounds: mapboxgl.LngLatBoundsLike): mapboxgl.LngLatBoundsLike;
    contains(tileID: TileID): boolean;
}
type Callback<T> = (error: Error | null | undefined, result: T | null | undefined) => void;
type MapboxMap = mapboxgl.Map & {
    _refreshExpiredTiles: any;
    _requestManager: any;
    painter: any;
};
/**
 * Pmtiles Options
 */
type PmTilesOptions = {
    /**
     * The pmtile url
     */
    url: string;
};
type Tile = {
    setTexture(arg0: (data: any) => any, painter: any): unknown;
    request: any;
    aborted: any;
    resourceTiming: any;
    setExpiryData(data: any): unknown;
    loadVectorData(data: any, painter: any): unknown;
    reloadCallback: any;
    tileID: any;
    uid: any;
    tileZoom: any;
    isSymbolTile: any;
    isExtraShadowCaster: any;
    actor: any;
    state: string;
};
type TileID = {
    z: number;
    x: number;
    y: number;
    canonical: TileID;
};
export declare const PmTilesSource: {
    new (args_0: string, args_1: PmTilesOptions, args_2: any, args_3: any): {
        id: string;
        scheme: string;
        minzoom: number;
        maxzoom: number;
        tileSize: number;
        attribution: string | undefined;
        tiles: string[];
        map: MapboxMap;
        roundZoom: boolean;
        tileBounds: TileBounds | undefined;
        minTileCacheSize: number | undefined;
        maxTileCacheSize: number | undefined;
        promoteId: string | undefined;
        type: string;
        fire: Function;
        scope: string | undefined;
        dispatcher: any;
        reparseOverscaled: boolean;
        setEventedParent: any;
        _loaded: boolean;
        _tileWorkers: {
            [string: string]: any;
        };
        _dataType: string;
        _implementation: PmTilesOptions;
        _protocol: Protocol;
        _instance: PMTiles;
        _collectResourceTiming: boolean;
        _tileJSONRequest: Promise<any> | undefined;
        loadTile: (tile: Tile, callback: Callback<void>) => void;
        tileType: TileType;
        header: any;
        contentType: string;
        zoomToExtent(): void;
        hasTile(tileID: TileID): boolean;
        load(callback?: Callback<void>): void;
        loaded(): boolean;
        loadVectorTile(tile: Tile, callback: Callback<void>): void;
        loadRasterTileData(tile: Tile, data: any): void;
        loadRasterTile(tile: Tile, callback: Callback<void>): void;
    };
    SOURCE_TYPE: string;
    /**
     *
     * @param url The pmTiles URL
     * @returns A Json object of the PmTile's metadata
     */
    getMetadata(url: string): Promise<any>;
};
export default PmTilesSource;
//# sourceMappingURL=index.d.ts.map