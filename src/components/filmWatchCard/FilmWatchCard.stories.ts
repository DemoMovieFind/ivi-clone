import { Meta, StoryObj } from "@storybook/react";
import FilmWatchCard from "./FilmWatchCard";

const meta = {
  title: "Film watch card/FilmWatchCard",
  component: FilmWatchCard,
  tags: ["autodocs"],
} satisfies Meta<typeof FilmWatchCard>;

export default meta;
type Story = StoryObj<typeof meta>

export const filmWatchCard: Story = {}