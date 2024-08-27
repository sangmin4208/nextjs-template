import React, { useEffect } from 'react'
import type { Preview } from '@storybook/react'
import { inter } from '../src/app/fonts'
import { Providers } from '../src/app/providers'
import RoutesLayout from '../src/app/(routes)/layout'
import '../src/app/styles/globals.css'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      useEffect(() => {
        const root = document.querySelector('html')!
        root.classList.add(inter.className)
      }, [])

      if (parameters.pageLayout === 'view') {
        return (
          <RoutesLayout>
            <Providers>
              <Story />
            </Providers>
          </RoutesLayout>
        )
      }

      return (
        <Providers>
          <div className="p-7">
            <Story />
          </div>
        </Providers>
      )
    },
  ],
}

export default preview
