import type { Meta, StoryObj } from "@storybook/react";

import SortPlank from "./SortPlank";

const meta = {
  title: "Sort/SortPlank",
  component: SortPlank,
  tags: ["autodocs"],
} satisfies Meta<typeof SortPlank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Genre: Story = {
  args: {
    isActive: true,
    text: "По количеству оценок",
  },
};