import type { Meta, StoryObj } from "@storybook/react";

import { GenreSlider } from "./GenreSlider";
import RouterWrapper from "../../../../../.storybook/routerWrapper";

const meta = {
  title: "Filters/Genres/GenreSlider",
  component: GenreSlider,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const countrySlider: Story = {
  render: () => RouterWrapper(<GenreSlider />),
  args: {},
};
