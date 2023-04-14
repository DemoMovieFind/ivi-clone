import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "./Rating";

const meta = {
  title: "Card components/Rating",
  component: Rating,
  tags: ["autodocs"],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: "8,5",
  },
};
