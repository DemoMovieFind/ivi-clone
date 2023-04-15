import { Meta, StoryObj } from '@storybook/react'
import CommentCard from './CommentCard'

const meta = {
  title: 'Comments/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>

export default meta;
type Story = StoryObj<typeof meta>

export const commentCard: Story = {}