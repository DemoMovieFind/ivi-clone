import type { Meta, StoryObj } from "@storybook/react";

import CardTopFilm from "./CardTopFilm";

const meta = {
  title: "Card components/CardTopFilm",
  component: CardTopFilm,
  tags: ["autodocs"],
} satisfies Meta<typeof CardTopFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnePlusOne: Story = {

};