import type { Meta } from "@storybook/react";

import { FilterBar } from "./FilterBar";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/FilterBar",
  component: FilterBar,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterBar>;

export default meta;

export const AppStore = {
  render: () => (
    <BrowserRouter>
      <FilterBar />
    </BrowserRouter>
  ),
};
