import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import RouterWrapper from '../../../../.storybook/routerWrapper';

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
  render:(args) => RouterWrapper(<IconButton {...args}/>)
};

export const OK: Story = {
  args: {
    name: "ok",
  },
  render:(args) => RouterWrapper(<IconButton {...args}/>)
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
  render:(args) => RouterWrapper(<IconButton {...args}/>)
};

export const Linkedin: Story = {
  args: {
    name: "in",
  },
  render:(args) => RouterWrapper(<IconButton {...args}/>)
};

export const Telegram: Story = {
  args: {
    name: "tl",
  },
  render:(args) => RouterWrapper(<IconButton {...args}/>)
};

export const USER: Story = {
  args: {
    name: "user",
  },
  render:(args) => RouterWrapper(<IconButton {...args}/>)
};
