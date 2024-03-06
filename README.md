# Mapbox-PmTiles

[![NPM Build](https://github.com/am2222/mapbox-pmtiles/actions/workflows/build.yml/badge.svg)](https://github.com/am2222/mapbox-pmtiles/actions/workflows/build.yml) [![](https://data.jsdelivr.com/v1/package/npm/mapbox-pmtiles/badge)](https://www.jsdelivr.com/package/npm/mapbox-pmtiles)

Add PmTiles support to mapbox

# Usage

## ESM Module

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

## JSDeliver

```html

<script type="module">
import mapboxPmtiles from 'https://cdn.jsdelivr.net/npm/mapbox-pmtiles/+esm'
</script>


```


<div class="map">
  <iframe src="./docs/assets/map.html"></iframe>
</div>
