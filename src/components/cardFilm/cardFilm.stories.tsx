import type { Meta, StoryObj } from "@storybook/react";

import storeDB from "../../miniDb2.json";

import { CardFilm } from "./cardFilm";

import { FilmMainCard } from "../../types/entities/FilmMainCard";
import RouterWrapper from "../../../.storybook/routerWrapper";
import { Provider } from "react-redux";
import { store } from "../../store/store";

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
    film: storeDB[0] as FilmMainCard,
  },
  render: (args) => <Provider store={store}> {RouterWrapper(<CardFilm {...args}/>)}</Provider>
};

export const Default: Story = {
  args: {
    appearance: "default",
    film: storeDB[1] as FilmMainCard,
  },
  render: (args) =><Provider store={store}> {RouterWrapper(<CardFilm {...args}/>)}</Provider>
};
