import { Meta, StoryObj } from "@storybook/react"
import ScoresFilter from "./ScoresFilter";
import RouterWrapper from "../../../../.storybook/routerWrapper";

const meta = {
  title: 'Filters/ScoresFilter',
  component: ScoresFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof ScoresFilter>

export default meta;
type Story = StoryObj<typeof meta>

export const scoresFilter: Story = {
  args: {
    max: 10,
  },
  render:() => RouterWrapper(<ScoresFilter/>)
}