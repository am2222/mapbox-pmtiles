

<div align="center">

![NPM Version](https://img.shields.io/npm/v/mapbox-pmtiles?style=flat-square) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/am2222/mapbox-pmtiles/build.yml?style=flat-square&label=npm%20deploy) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/am2222/mapbox-pmtiles/pages%2Fpages-build-deployment?style=flat-square&label=documentations%20build) [![](https://data.jsdelivr.com/v1/package/npm/mapbox-pmtiles/badge)](https://www.jsdelivr.com/package/npm/mapbox-pmtiles)

</div>

## Mapbox-PmTiles
Add PmTiles support to mapbox





## Usage

## ESM Module

```js
import mapboxgl from "mapbox-gl";

import { PmTilesSource } from "mapbox-pmtiles";
//Define custom source
mapboxgl.Style.setSourceType(PmTilesSource.SOURCE_TYPE, PmTilesSource);

map.on("load", () => {

    const PMTILES_URL =
    "https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles";

    const header = await mapboxPmTiles.PmTilesSource.getHeader(PMTILES_URL);
    const bounds = [
          header.minLon,
          header.minLat,
          header.maxLon,
          header.maxLat,
        ];

    map.addSource('pmTileSourceName', {
          type: mapboxPmTiles.PmTilesSource.SOURCE_TYPE,
          url: PMTILES_URL,
          minzoom: header.minZoom,
          maxzoom: header.maxZoom,
          bounds: bounds,
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

## JSDeliver

Here you can use it in the webpages

```html

<script type="text/javascript"  src="https://cdn.jsdelivr.net/npm/mapbox-pmtiles@1/dist/mapbox-pmtiles.umd.min.js"></script>

<script>
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 ,// starting zoom,
    });
    mapboxgl.Style.setSourceType(mapboxPmTiles.SOURCE_TYPE, mapboxPmTiles.PmTilesSource);

    map.on("load", () => {

        const PMTILES_URL =
        "https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles";

        const header = await mapboxPmTiles.PmTilesSource.getHeader(PMTILES_URL);
        const bounds = [
              header.minLon,
              header.minLat,
              header.maxLon,
              header.maxLat,
            ];
    
        map.addSource('pmTileSourceName', {
              type: mapboxPmTiles.PmTilesSource.SOURCE_TYPE,
              url: PMTILES_URL,
              minzoom: header.minZoom,
              maxzoom: header.maxZoom,
              bounds: bounds,
            });

        map.showTileBoundaries = true;
        map.addLayer({
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
</script>

```

Or you can use the following


```html

<script type="module">
import mapboxPmtiles from 'https://cdn.jsdelivr.net/npm/mapbox-pmtiles@1.0.29/+esm'
</script>

```

## Add a Vector TileSet



## Add a raster TileSet



## What is PmTiles
See the [PmTiles](https://docs.protomaps.com/pmtiles/) repository for more information 


