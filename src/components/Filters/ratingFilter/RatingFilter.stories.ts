import { Meta, StoryObj } from "@storybook/react"
import RatingFilter from "./RatingFilter";

const meta = {
  title: 'Filters/RatingFilter',
  component: RatingFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof RatingFilter>

export default meta;
type Story = StoryObj<typeof meta>

export const ratingFilter: Story = {
  args: {
    min: 1,
    max: 10,
    onChange: () => { '' }
  }
}