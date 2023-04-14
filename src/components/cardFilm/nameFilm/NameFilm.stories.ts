import type { Meta, StoryObj } from "@storybook/react";

import { NameFilm } from "./NameFilm";

const meta = {
  title: "Card components/NameFilm",
  component: NameFilm,
  tags: ["autodocs"],
} satisfies Meta<typeof NameFilm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Титаник",
  },
};
