import type { Meta, StoryObj } from "@storybook/react";

import { DefaultFilter } from "./DefaultFilter";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/ElementList",
  component: DefaultFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <DefaultFilter />
    </BrowserRouter>
  ),
  args: {},
};
