import type { Meta, StoryObj } from "@storybook/react";

import { SlickArrowRight } from "./SlickArrowRight";

const meta = {
  title: "Buttons/SlickArrowRight",
  component: SlickArrowRight,
  tags: ["autodocs"],
} satisfies Meta<typeof SlickArrowRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
