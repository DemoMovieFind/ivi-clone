import type { Meta, StoryObj } from "@storybook/react";

import { FilterPlank } from "./FilterPlank";

const meta = {
  title: "Filters/FilterPlank",
  component: FilterPlank,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterPlank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Genre: Story = {
  args: {
    isActive: true,
    text: "Жанры",
  },
};
