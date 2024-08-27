import { within, userEvent, expect, fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    onClick: fn(),
    children: 'Click me',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
} satisfies Story
