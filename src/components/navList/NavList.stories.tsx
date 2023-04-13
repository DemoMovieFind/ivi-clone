import { Meta, StoryObj } from "@storybook/react";
import NavList from "./NavList";

const meta: Meta<typeof NavList> = {
  title: "NavList",
  component: NavList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const navList: Story = {};
export default meta;
