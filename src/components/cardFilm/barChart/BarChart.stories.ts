import type { Meta, StoryObj } from "@storybook/react";

import { BarChart } from "./BarChart";

const meta = {
  title: "Card components/BarChart",
  component: BarChart,
  tags: ["autodocs"],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: "режиссура",
    value: "45",
  },
};
