import { Meta, StoryObj } from "@storybook/react";
import { TitlePage } from "./TitlePage";
import RouterWrapper from "../../../.storybook/routerWrapper";

const meta = {
  title: "UI components/TitlePage",
  component: TitlePage,
  tags: ["autodocs"],
} satisfies Meta<typeof TitlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stock: Story = {
  args: {},
  render:()=>RouterWrapper(<TitlePage/>)
};
