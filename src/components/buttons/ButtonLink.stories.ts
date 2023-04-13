import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLink } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "UI Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "default",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    appearance: "primary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};
