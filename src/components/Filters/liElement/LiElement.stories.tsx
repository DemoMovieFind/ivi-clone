import type { Meta, StoryObj } from "@storybook/react";

import { LiElement } from "./LiElement";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/ElementList",
  component: LiElement,
  tags: ["autodocs"],
} satisfies Meta<typeof LiElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Counties: Story = {
  render: () => (
    <BrowserRouter>
      <LiElement value={"Россия"} argument={"countries"} />
    </BrowserRouter>
  ),
  args: {
    value: "Россия",
    argument: " countries",
  },
};

export const Genres: Story = {
  render: () => (
    <BrowserRouter>
      <LiElement value={"Драма"} argument={"genres"} />
    </BrowserRouter>
  ),
  args: {
    value: "Драма",
    argument: " genres",
  },
};
