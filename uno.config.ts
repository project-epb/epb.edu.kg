import { defineConfig, presetWind4, presetAttributify } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetAttributify(),
  ],
  extractors: [extractorPug()],
})
