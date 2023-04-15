import type { Meta, StoryObj } from "@storybook/react";

import { OnlineIvi } from "./OnlineIvi";

const meta = {
  title: "OnlineIvi",
  component: OnlineIvi,
  tags: ["autodocs"],
} satisfies Meta<typeof OnlineIvi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
