import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import RouterWrapper from "../../../.storybook/routerWrapper";

const meta: Meta<typeof Footer> = {
  title: "Page Components/Footer",
  component: Footer,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const footer: Story = {
  render:() => RouterWrapper(<Footer/>)
};
export default meta;
