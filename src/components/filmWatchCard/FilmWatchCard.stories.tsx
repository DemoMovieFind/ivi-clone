import { Meta, StoryObj } from "@storybook/react";
import FilmWatchCard from "./FilmWatchCard";
import RouterWrapper from '../../../.storybook/routerWrapper';

const meta:Meta<typeof FilmWatchCard> = {
  title: "Film watch card/FilmWatchCard",
  component: FilmWatchCard,
  tags: ["autodocs"],
};


type Story = StoryObj<typeof meta>

export const filmWatchCard: Story = {
  render:(args) => RouterWrapper(<FilmWatchCard {...args} />)
};

export default meta;

