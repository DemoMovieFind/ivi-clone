import type { Meta, StoryObj } from "@storybook/react";

import MultipleRows from "./InfinitySlider";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MemoryRouter } from "react-router-dom";
const meta = {
  title: "InfinitySlider",
  component: MultipleRows,
  tags: ["autodocs"],
} satisfies Meta<typeof MultipleRows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render:()=><Provider store={store}><MemoryRouter><MultipleRows/></MemoryRouter></Provider>
};
