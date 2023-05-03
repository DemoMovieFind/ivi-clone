import { Meta, StoryObj } from "@storybook/react";
import FilmWatchCard from "./FilmWatchCard";
import { BrowserRouter } from "react-router-dom";

const meta:Meta<typeof FilmWatchCard> = {
  title: "Film watch card/FilmWatchCard",
  component: FilmWatchCard,
  tags: ["autodocs"],
};


type Story = StoryObj<typeof meta>

export const filmWatchCard: Story = {
  render:(args)=>
    <BrowserRouter>
      <FilmWatchCard {...args} />
    </BrowserRouter>
};

export default meta;

