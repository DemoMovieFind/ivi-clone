import type { Meta, StoryObj } from "@storybook/react";

import { GenreIconCheckbox } from "./GenreIconCheckbox";

const meta = {
  title: "UI Components/GenreIconCheckbox",
  component: GenreIconCheckbox,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreIconCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drama: Story = {
  args: {
    appearance: "",
    genre: "drama",
  },
};
