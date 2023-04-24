import type { Meta, StoryObj } from "@storybook/react";

import { GenreSlider } from "./GenreSlider";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/Genres/GenreSlider",
  component: GenreSlider,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const countrySlider: Story = {
  render: () => (
    <BrowserRouter>
      <GenreSlider />
    </BrowserRouter>
  ),
  args: {},
};
