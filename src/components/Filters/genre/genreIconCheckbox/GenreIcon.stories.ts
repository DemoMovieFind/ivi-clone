import type { Meta, StoryObj } from "@storybook/react";

import { GenreIcon } from "./GenreIcon";

const meta = {
  title: "Filters/Genres/GenreIcon",
  component: GenreIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drama: Story = {
  args: {
    genre: "Драма",
  },
};
