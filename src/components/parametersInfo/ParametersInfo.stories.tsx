import { Meta, StoryObj } from "@storybook/react";
import { ParametersInfo } from "./ParametersInfo";

const meta = {
  title: "UI components/ParametersInfo",
  component: ParametersInfo,
  tags: ["autodocs"],
} satisfies Meta<typeof ParametersInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stock: Story = {
  args: {},
};
