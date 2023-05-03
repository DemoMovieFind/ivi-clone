import type { Meta, StoryObj } from "@storybook/react";

import { Info } from "./Info";

const meta = {
  title: "ActorCardFilm/Info",
  component: Info,
  tags: ["autodocs"],
} satisfies Meta<typeof Info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    year: 1995,
    title: "Форест Гамп",
    rating: 9.9,
  },
};
