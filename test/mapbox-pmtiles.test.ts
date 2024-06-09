// sum.test.js
import { expect, test, vi } from 'vitest'
import PmTilesSource from '../src/index'


const OSM_PMTILE="https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles"
const OSM_RASTER_PMTILE="https://pmtiles.io/stamen_toner(raster)CC-BY+ODbL_z3.pmtiles"
test('Get pmtiles metadata', async () => {
    const metadata = await PmTilesSource.getMetadata(OSM_PMTILE)
    expect(metadata.name).toBe("Basemap")
})

test('Get pmtiles header', async () => {
    const header = await PmTilesSource.getHeader(OSM_PMTILE)
    expect(header.tileType).toBe(1)
})

test('Load A tileset', async () => {
    const source = new PmTilesSource("testPmtiles", {url: OSM_PMTILE}, {}, {})
    const mockFire=vi.fn()
    source.fire=mockFire
    await source.load()

    expect(mockFire.mock.calls.length).toBe(3)
    expect(source.type).toBe("vector")
    expect(source.loaded()).toBe(true)
})


test('Load A raster tileset', async () => {
    const source = new PmTilesSource("testPmtiles", {url: OSM_RASTER_PMTILE}, {}, {})
    const mockFire=vi.fn()
    source.fire=mockFire
    await source.load()

    expect(source.type).toBe("raster")
})

test('Detect the correct contentType from tileset', async () => {
    const source = new PmTilesSource("testPmtiles", {url: OSM_PMTILE}, {}, {})
    const mockFire=vi.fn()
    source.fire=mockFire
    await source.load()

    expect(mockFire.mock.calls.length).toBe(3)
    expect(source.contentType).toBe("application/vnd.mapbox-vector-tile")
})


test('Detect the correct contentType from raster tileset', async () => {
    const source = new PmTilesSource("testPmtiles", {url: OSM_RASTER_PMTILE}, {}, {})
    const mockFire=vi.fn()
    source.fire=mockFire
    await source.load()

    expect(mockFire.mock.calls.length).toBe(3)
    expect(source.contentType).toBe("image/png")
})

test('Handle non-integer zoom levels', async () => {
    const source = new PmTilesSource("testPmtiles", {url: "https://r2-public.protomaps.com/protomaps-sample-datasets/cb_2018_us_zcta510_500k.pmtiles"}, {}, {})
    const mockFire=vi.fn()
    source.fire=mockFire
    await source.load()

    expect(source.maxzoom).toBe(7)
    expect(source.minzoom).toBe(0)
})

