"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmTilesSource = exports.SOURCE_TYPE = void 0;
// Mapbox import
const mapbox_gl_1 = __importDefault(require("mapbox-gl"));
const pmtiles_1 = require("pmtiles");
// @ts-expect-error
const VectorTileSourceImpl = mapbox_gl_1.Style.getSourceType("vector");
exports.SOURCE_TYPE = "pmtile-source";
const extend = (dest, ...sources) => {
    for (const src of sources) {
        for (const k in src) {
            dest[k] = src[k];
        }
    }
    return dest;
};
const mercatorXFromLng = (lng) => {
    return (180 + lng) / 360;
};
const mercatorYFromLat = (lat) => {
    return ((180 -
        (180 / Math.PI) *
            Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))) /
        360);
};
class TileBounds {
    constructor(bounds, minzoom, maxzoom) {
        this.bounds = mapbox_gl_1.default.LngLatBounds.convert(this.validateBounds(bounds));
        this.minzoom = minzoom || 0;
        this.maxzoom = maxzoom || 24;
    }
    validateBounds(bounds) {
        // make sure the bounds property contains valid longitude and latitudes
        if (!Array.isArray(bounds) || bounds.length !== 4)
            return [-180, -90, 180, 90];
        return [
            Math.max(-180, bounds[0]),
            Math.max(-90, bounds[1]),
            Math.min(180, bounds[2]),
            Math.min(90, bounds[3]),
        ];
    }
    contains(tileID) {
        const worldSize = Math.pow(2, tileID.z);
        const level = {
            minX: Math.floor(mercatorXFromLng(this.bounds.getWest()) * worldSize),
            minY: Math.floor(mercatorYFromLat(this.bounds.getNorth()) * worldSize),
            maxX: Math.ceil(mercatorXFromLng(this.bounds.getEast()) * worldSize),
            maxY: Math.ceil(mercatorYFromLat(this.bounds.getSouth()) * worldSize),
        };
        const hit = tileID.x >= level.minX &&
            tileID.x < level.maxX &&
            tileID.y >= level.minY &&
            tileID.y < level.maxY;
        return hit;
    }
}
class Event {
    constructor(type, data = {}) {
        extend(this, data);
        this.type = type;
    }
}
class ErrorEvent extends Event {
    constructor(error, data = {}) {
        super('error', extend({ error }, data));
    }
}
exports.PmTilesSource = (_a = class PmTileSourceImpl extends VectorTileSourceImpl {
        static getMetadata(url) {
            return __awaiter(this, void 0, void 0, function* () {
                const instance = new pmtiles_1.PMTiles(url);
                return instance.getMetadata();
            });
        }
        constructor(...args) {
            var _b;
            super(...args);
            this.roundZoom = true;
            this.type = 'vector';
            this._collectResourceTiming = false;
            const [id, implementation, dispatcher, eventedParent] = args;
            this.id = id;
            this._dataType = 'vector';
            this.dispatcher = dispatcher;
            this._implementation = implementation;
            const { url } = implementation;
            this.setEventedParent(eventedParent);
            this.reparseOverscaled = true;
            this.scheme = 'zxy';
            this.tileSize = 512;
            this._loaded = false;
            this.type = 'vector';
            this._protocol = new pmtiles_1.Protocol();
            this.tiles = [`pmtiles://${url}/{z}/{x}/{y}`];
            const p = new pmtiles_1.PMTiles(url);
            // this is so we share one instance across the JS code and the map renderer
            this._protocol.add(p);
            this._instance = p;
            if (!this._implementation) {
                (_b = this.fire) === null || _b === void 0 ? void 0 : _b.call(new ErrorEvent(new Error(`Missing implementation for ${this.id} custom source`)));
            }
            // if (this._implementation.bounds) {
            //     this.tileBounds = new TileBounds(this._implementation.bounds, this.minzoom, this.maxzoom);
            // }
        }
        hasTile(tileID) {
            return !this.tileBounds || this.tileBounds.contains(tileID.canonical);
        }
        load(callback) {
            var _b;
            this._loaded = false;
            (_b = this.fire) === null || _b === void 0 ? void 0 : _b.call(new Event("dataloading", { dataType: "source" }));
            this._tileJSONRequest = this._instance
                .getMetadata()
                .then((tileJSON) => {
                var _b, _c;
                this._tileJSONRequest = undefined;
                this._loaded = true;
                extend(this, tileJSON);
                if (tileJSON.bounds && tileJSON.minZoom && tileJSON.m)
                    this.tileBounds = new TileBounds(tileJSON.bounds, this.minzoom, this.maxzoom);
                if (this.maxzoom == undefined) {
                    console.warn('The maxzoom parameter is not defined in the source json. This can cause memory leak. So make sure to define maxzoom in the layer');
                }
                this.type = 'vector'; // to avoid overwriting 
                // `content` is included here to prevent a race condition where `Style#updateSources` is called
                // before the TileJSON arrives. this makes sure the tiles needed are loaded once TileJSON arrives
                // ref: https://github.com/mapbox/mapbox-gl-js/pull/4347#discussion_r104418088
                (_b = this.fire) === null || _b === void 0 ? void 0 : _b.call(new Event("data", { dataType: "source", sourceDataType: "metadata" }));
                (_c = this.fire) === null || _c === void 0 ? void 0 : _c.call(new Event("data", { dataType: "source", sourceDataType: "content" }));
            })
                .catch((err) => {
                var _b;
                (_b = this.fire) === null || _b === void 0 ? void 0 : _b.call(new ErrorEvent(err));
                if (callback)
                    callback(err);
            });
        }
        loaded() {
            return this._loaded;
        }
        loadTile(tile, callback) {
            var _b, _c, _d;
            const done = (err, data) => {
                var _b, _c;
                delete tile.request;
                if (tile.aborted)
                    return callback(null);
                if (err && err.status !== 404) {
                    return callback(err);
                }
                if (data && data.resourceTiming)
                    tile.resourceTiming = data.resourceTiming;
                if (((_b = this.map) === null || _b === void 0 ? void 0 : _b._refreshExpiredTiles) && data)
                    tile.setExpiryData(data);
                tile.loadVectorData(data, (_c = this.map) === null || _c === void 0 ? void 0 : _c.painter);
                // cacheEntryPossiblyAdded(this.dispatcher);
                callback(null);
                if (tile.reloadCallback) {
                    this.loadTile(tile, tile.reloadCallback);
                    tile.reloadCallback = null;
                }
            };
            const url = (_b = this.map) === null || _b === void 0 ? void 0 : _b._requestManager.normalizeTileURL(tile.tileID.canonical.url(this.tiles, this.scheme));
            const request = (_c = this.map) === null || _c === void 0 ? void 0 : _c._requestManager.transformRequest(url, "Tile");
            const params = {
                request,
                data: {},
                uid: tile.uid,
                tileID: tile.tileID,
                tileZoom: tile.tileZoom,
                zoom: tile.tileID.overscaledZ,
                tileSize: this.tileSize * tile.tileID.overscaleFactor(),
                type: "vector",
                source: this.id,
                scope: this.scope,
                // pixelRatio: browser.devicePixelRatio,
                showCollisionBoxes: (_d = this.map) === null || _d === void 0 ? void 0 : _d.showCollisionBoxes,
                promoteId: this.promoteId,
                isSymbolTile: tile.isSymbolTile,
                // brightness: this.map.style ? (this.map.style.getBrightness() || 0.0) : 0.0,
                extraShadowCaster: tile.isExtraShadowCaster,
            };
            // params.request.collectResourceTiming = this._collectResourceTiming;
            const afterLoad = (error, data, cacheControl, expires) => {
                if (error || !data) {
                    done.call(this, error);
                    return;
                }
                if (data.length == 0) {
                    done.call(this, new Error("zero size data"));
                    return;
                }
                params.data = {
                    cacheControl: cacheControl,
                    expires: expires,
                    rawData: data,
                };
                // // the worker will skip the network request if the data is already there
                // params.data = {
                //     cacheControl: data.cacheControl,
                //     expires: data.expires,
                //     rawData: data.rawData.slice(0),
                // };
                if (tile.actor)
                    tile.actor.send("loadTile", params, done.bind(this), undefined, true);
            };
            if (tile.tileZoom < this.minzoom || tile.tileZoom >= this.maxzoom - 1) {
                return callback({ status: 404 });
            }
            if (!tile.actor || tile.state === "expired") {
                tile.actor = this._tileWorkers[url] = this._tileWorkers[url] || this.dispatcher.getActor();
                tile.request = this._protocol.tile(Object.assign(Object.assign({}, tile), { url }), afterLoad);
                // if workers are not ready to receive messages yet, use the idle time to preemptively
                // load tiles on the main thread and pass the result instead of requesting a worker to do so
                // if (!this.dispatcher.ready) {
                //     tile.request= this._protocol.tile({ ...tile, url }, afterLoad);
                // } else {
                //     tile.request = tile.actor.send(
                //         "loadTile",
                //         params,
                //         done.bind(this),
                //         undefined,
                //         true
                //     );
                // }
            }
            else if (tile.state === "loading") {
                // schedule tile reloading after it has been loaded
                tile.reloadCallback = callback;
            }
            else {
                debugger;
                tile.request = this._protocol.tile(Object.assign(Object.assign({}, tile), { url }), afterLoad);
            }
            console.log(url);
        }
    },
    _a.SOURCE_TYPE = exports.SOURCE_TYPE,
    _a);
// @ts-expect-error
mapbox_gl_1.Style.setSourceType(exports.PmTilesSource.SOURCE_TYPE, exports.PmTilesSource);
exports.default = exports.PmTilesSource;
//# sourceMappingURL=index.js.map