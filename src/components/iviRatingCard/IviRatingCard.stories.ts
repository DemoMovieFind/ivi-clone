import { Meta, StoryObj } from '@storybook/react'
import IviRatingCard from './IviRatingCard';

const meta = {
  title: 'Ivi Rating Card/IviRatingCard',
  component: IviRatingCard,
  tags: ['autodocs'],
} satisfies Meta<typeof IviRatingCard>

export default meta;
type Story = StoryObj<typeof meta>

export const iviRatingCard: Story = {}