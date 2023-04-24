import type { Meta, StoryObj } from "@storybook/react";
import { Country } from "./Country";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/Сountries/Country",
  component: Country,
  tags: ["autodocs"],
} satisfies Meta<typeof Country>;

export default meta;
type Story = StoryObj<typeof meta>;

export const genreSlider: Story = {
  render: () => (
    <BrowserRouter>
      <Country />
    </BrowserRouter>
  ),
  args: {},
};
