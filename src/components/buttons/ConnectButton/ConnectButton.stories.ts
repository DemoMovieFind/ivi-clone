import type { Meta, StoryObj } from "@storybook/react";

import { ConnectButton } from "./ConnectButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "UI Components/ConnectButton",
  component: ConnectButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ConnectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mail: Story = {
  args: {
    name: "mail",
  },
};

export const Tel: Story = {
  args: {
    name: "tel",
  },
};
