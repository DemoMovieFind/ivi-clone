import type { Meta, StoryObj } from "@storybook/react";

import { DeviceButton } from "./DeviceButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/DeviceButton",
  component: DeviceButton,
  tags: ["autodocs"],
  // argTypes: {
  // backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof DeviceButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppStore: Story = {
  args: {
    name: "app-store",
  },
};

export const GooglePlay: Story = {
  args: {
    name: "google-play",
  },
};
