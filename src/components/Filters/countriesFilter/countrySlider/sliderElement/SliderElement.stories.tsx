import type { Meta, StoryObj } from "@storybook/react";

import SliderElement from "./SliderElement";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/Сountries/SliderElement",
  component: SliderElement,
  tags: ["autodocs"],
} satisfies Meta<typeof SliderElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RussiaActive: Story = {
  render: () => (
    <BrowserRouter>
      <SliderElement country={"Россия"} />
    </BrowserRouter>
  ),
  args: {
    country: "Россия",
  },
};
