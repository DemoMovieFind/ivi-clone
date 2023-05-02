import type { Meta, StoryObj } from "@storybook/react";

import MultipleRows from "./InfinitySlider";
const meta = {
  title: "InfinitySlider",
  component: MultipleRows,
  tags: ["autodocs"],
} satisfies Meta<typeof MultipleRows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
