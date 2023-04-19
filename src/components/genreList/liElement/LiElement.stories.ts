import type { Meta, StoryObj } from "@storybook/react";

import { LiElement } from "./LiElement";

const meta = {
  title: "LiElement",
  component: LiElement,
  tags: ["autodocs"],
} satisfies Meta<typeof LiElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drama: Story = {
  args: {
    appearance: "",
  },
};
