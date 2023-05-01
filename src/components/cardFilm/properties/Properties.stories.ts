import type { Meta, StoryObj } from "@storybook/react";

import { Properties } from "./Properties";

const meta = {
  title: "Card components/Properties",
  component: Properties,
  tags: ["autodocs"],
} satisfies Meta<typeof Properties>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    years: 2010 - 2015,
    country: "Россия",
    genre: "Приключения",
    duration: "3 сезона",
  },
};
