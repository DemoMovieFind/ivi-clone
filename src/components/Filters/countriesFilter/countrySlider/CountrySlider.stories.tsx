import type { Meta, StoryObj } from "@storybook/react";

import { CountrySlider } from "./CountrySlider";
import RouterWrapper from "../../../../../.storybook/routerWrapper";

const meta = {
  title: "Filters/Сountries/CountrySlider",
  component: CountrySlider,
  tags: ["autodocs"],
} satisfies Meta<typeof CountrySlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const countrySlider: Story = {
  render: () => RouterWrapper(<CountrySlider />),
  args: {},
};
