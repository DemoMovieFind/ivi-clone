import { Meta, StoryObj } from "@storybook/react";
import MobilMenu from "./MobilMenu";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof MobilMenu> = {
  title: "Page Components/MobilMenu",
  component: MobilMenu,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const footer: Story = {
  render: () => (
    <BrowserRouter>
      <MobilMenu />
    </BrowserRouter>
  ),
};
export default meta;
