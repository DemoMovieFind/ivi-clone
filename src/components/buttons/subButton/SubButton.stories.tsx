import type { Meta, StoryObj } from "@storybook/react";

import SubButton from "./SubButton";

const meta = {
  title: "UI Components/SubButton",
  component: SubButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SubButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
