import type { Meta, StoryObj } from "@storybook/react";

import { MainPageExample } from "./MainPageExample";

const meta = {
  title: "Page/MainPageExample",
  component: MainPageExample,
  tags: ["autodocs"],
} satisfies Meta<typeof MainPageExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
