import type { Meta, StoryObj } from "@storybook/react";

import { Genre } from "./genre";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/Genres/Genre",
  component: Genre,
  tags: ["autodocs"],
} satisfies Meta<typeof Genre>;

export default meta;
type Story = StoryObj<typeof meta>;

export const genreSlider: Story = {
  render: () => (
    <BrowserRouter>
      <Genre />
    </BrowserRouter>
  ),
  args: {},
};
