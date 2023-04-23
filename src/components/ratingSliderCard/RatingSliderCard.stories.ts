import { Meta, StoryObj } from "@storybook/react"
import RatingSliderCard from "./RatingSliderCard";

const meta = {
  title: 'Filters/RatingSliderCard',
  component: RatingSliderCard,
  tags: ['autodocs'],
} satisfies Meta<typeof RatingSliderCard>

export default meta;
type Story = StoryObj<typeof meta>

export const ratingSliderCard: Story = {
  args: {
    min: 1,
    max: 10,
    onChange: () => { '' }
  }
}