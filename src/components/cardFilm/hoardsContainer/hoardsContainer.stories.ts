import type { Meta, StoryObj } from "@storybook/react";

import { HoardsContainer } from "./hoardsContainer";

const meta = {
  title: "Card components/HoardsContainer",
  component: HoardsContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof HoardsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
