import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { BrowserRouter } from "react-router-dom";

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
  render:(args) => 
  <BrowserRouter>
    <IconButton {...args}/>
  </BrowserRouter>
};

export const OK: Story = {
  args: {
    name: "ok",
  },
  render:(args) => 
  <BrowserRouter>
    <IconButton {...args}/>
  </BrowserRouter>
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
  render:(args) => 
  <BrowserRouter>
    <IconButton {...args}/>
  </BrowserRouter>
};

export const Linkedin: Story = {
  args: {
    name: "in",
  },
  render:(args) => 
  <BrowserRouter>
    <IconButton {...args}/>
  </BrowserRouter>
};

export const Telegram: Story = {
  args: {
    name: "tl",
  },
  render:(args) => 
  <BrowserRouter>
    <IconButton {...args}/>
  </BrowserRouter>
};

export const USER: Story = {
  args: {
    name: "user",
  },
  render:(args) => 
  <BrowserRouter>
    <IconButton {...args}/>
  </BrowserRouter>
};
