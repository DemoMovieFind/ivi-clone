import type { Meta, StoryObj } from "@storybook/react";

import { ImgIcon } from "./ImgIcon";

const meta = {
  title: "UI Components/ButtonIcon",
  component: ImgIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof ImgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Apple: Story = {
  args: {
    appearance: "apple",
  },
};
export const Google: Story = {
  args: {
    appearance: "google",
  },
};
export const Vk: Story = {
  args: {
    appearance: "vk",
  },
};
export const OK: Story = {
  args: {
    appearance: "ok",
  },
};
export const TW: Story = {
  args: {
    appearance: "tw",
  },
};
export const VB: Story = {
  args: {
    appearance: "vb",
  },
};
export const IN: Story = {
  args: {
    appearance: "in",
  },
};
export const TL: Story = {
  args: {
    appearance: "tl",
  },
};
