import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/**
 * More plugins to consider
 *
 * General:
 * - Tailwind: https://github.com/huibizhang/vitawind
 * - auto-imports: https://github.com/antfu/unplugin-auto-import
 *
 * React:
 * - @vitejs/plugin-react: https://github.com/vitejs/vite/tree/main/packages/plugin-react
 * - inline SVGs: https://github.com/pd4d10/vite-plugin-svgr
 * - async-catch: https://github.com/WJCHumble/vite-plugin-async-catch
 * - MDX: https://github.com/brillout/vite-plugin-mdx
 */

export default defineConfig({
  plugins: [
    // https://github.com/JonasKruckenberg/imagetools/tree/main/packages/vite#usage
    // -> import Image from 'example.jpg?w=400&h=300&webp'
    imagetools(),
  ],
})
