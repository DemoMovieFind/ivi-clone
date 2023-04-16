import { Meta, StoryObj } from '@storybook/react';
import CommentAnswerFrom from './CommentAnswerFrom';

const meta = {
  title: 'Comments/CommentAnswerFrom',
  component: CommentAnswerFrom,
  tags: ['autodocs']
} satisfies Meta<typeof CommentAnswerFrom>

export default meta
type Story = StoryObj<typeof meta>

export const commentAnswerFrom: Story = {}