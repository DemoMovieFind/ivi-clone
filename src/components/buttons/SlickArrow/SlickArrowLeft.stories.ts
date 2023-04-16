import type { Meta, StoryObj } from "@storybook/react";

import { SlickArrowLeft } from "./SlickArrowLeft";

const meta = {
  title: "Buttons/SlickArrowLeft",
  component: SlickArrowLeft,
  tags: ["autodocs"],
} satisfies Meta<typeof SlickArrowLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
