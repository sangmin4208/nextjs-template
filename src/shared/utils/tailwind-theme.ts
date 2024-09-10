import resolveConfig from 'tailwindcss/resolveConfig'
import config from '@/../tailwind.config'

export const TailwindTheme = resolveConfig(config).theme
export const TailwindColor = TailwindTheme.colors
