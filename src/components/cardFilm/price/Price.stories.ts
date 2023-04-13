import type { Meta, StoryObj } from "@storybook/react";

import { Price } from "./Price";

const meta = {
  title: "Card components/Price",
  component: Price,
  tags: ["autodocs"],
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: false,
  },
};
