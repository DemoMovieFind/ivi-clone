import { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Loader",
  component: Loader,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const loader: Story = {};
export default meta;
