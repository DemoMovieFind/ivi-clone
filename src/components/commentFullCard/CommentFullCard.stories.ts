import { Meta, StoryObj } from '@storybook/react'
import CommentFullCard from './CommentFullCard'

const meta = {
  title: 'Comments/CommentFullCard',
  component: CommentFullCard,
  tags: ['autodocs']
} satisfies Meta<typeof CommentFullCard>

export default meta
type Story = StoryObj<typeof meta>

export const commentFullCard: Story = {}