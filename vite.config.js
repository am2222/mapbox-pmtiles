// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'mapboxPmTiles',
      // the proper extensions will be added
      fileName: 'mapbox-pmtiles',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['mapbox-gl'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
            mapboxgl: 'mapbox-gl',
        },
      },
      format: 'iife',

    },
    sourceMap: 'inline',
    minify:'terser'
  },
})