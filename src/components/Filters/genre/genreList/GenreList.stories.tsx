import type { Meta, StoryObj } from "@storybook/react";

import { GenreList } from "./GenreList";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/Genres/GenryList",
  component: GenreList,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const navList: Story = {
  render: () => (
    <BrowserRouter>
      <GenreList />
    </BrowserRouter>
  ),
  args: {},
};
