import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

import { shadcnPlugin } from './shadcn-plugin'

export const shadcnPreset = {
  darkMode: 'class',
  prefix: '',
  content: [],
  plugins: [shadcnPlugin, animatePlugin]
} satisfies Config
