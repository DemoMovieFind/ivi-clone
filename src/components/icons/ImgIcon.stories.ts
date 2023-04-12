import type { Meta, StoryObj } from "@storybook/react";

import { ImgIcon } from "./ImgIcon";

const meta = {
  title: "UI Components/ButtonIcon",
  component: ImgIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof ImgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "apple",
  },
};
