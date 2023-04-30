import { Meta, StoryObj } from "@storybook/react";
import { BreadCrumbs } from "./BreadCrumbs";

const meta = {
  title: "UI components/BreadCrumbs",
  component: BreadCrumbs,
  tags: ["autodocs"],
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const breadCrumbs: Story = {
  args: {
    genre: "Ужасы Комедия",
    country: ["Россия, США"],
  },
};
