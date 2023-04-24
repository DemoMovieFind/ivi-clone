import type { Meta, StoryObj } from "@storybook/react";

import { CounterList } from "./CounterList";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Filters/Сountries/CounterList",
  component: CounterList,
  tags: ["autodocs"],
} satisfies Meta<typeof CounterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const navList: Story = {
  render: () => (
    <BrowserRouter>
      <CounterList />
    </BrowserRouter>
  ),
  args: {},
};
