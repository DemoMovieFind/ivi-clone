import type { Meta, StoryObj } from "@storybook/react";

import { InfinitySlider } from "./InfinitySlider";

const meta = {
  title: "InfinitySlider",
  component: InfinitySlider,
  tags: ["autodocs"],
} satisfies Meta<typeof InfinitySlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
