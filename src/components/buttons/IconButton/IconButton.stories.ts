import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "UI Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VK: Story = {
  args: {
    name: "vk",
  },
};

export const OK: Story = {
  args: {
    name: "ok",
  },
};

export const Twitter: Story = {
  args: {
    name: "tw",
  },
};

export const VB: Story = {
  args: {
    name: "vb",
  },
};

export const Linkedin: Story = {
  args: {
    name: "in",
  },
};

export const Telegram: Story = {
  args: {
    name: "tl",
  },
};
