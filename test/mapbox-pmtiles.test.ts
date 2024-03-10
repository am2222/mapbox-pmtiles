// sum.test.js
import { expect, test } from 'vitest'
import PmTilesSource from '../src/index'


const OSM_PMTILE="https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles"
test('Get pmtiles metadata', async () => {
    const metadata = await PmTilesSource.getMetadata(OSM_PMTILE)
    expect(metadata.name).toBe("Basemap")
})