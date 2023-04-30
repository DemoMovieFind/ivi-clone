import type { Meta, StoryObj } from "@storybook/react";

import store from "../../miniDb2.json";

import { CardFilm } from "./cardFilm";

import { FilmMainCard } from "../../types/entities/FilmMainCard";

const meta = {
  title: "Card components/CardFilm",
  component: CardFilm,
  tags: ["autodocs"],
} satisfies Meta<typeof CardFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnePlusOne: Story = {
  args: {
    appearance: "default",
    film: store[0] as FilmMainCard,
  },
};

export const Default: Story = {
  args: {
    appearance: "default",
    film: store[1] as FilmMainCard,
  },
};
