import type { Meta, StoryObj } from "@storybook/react";

import { CardViewAll } from "./CardViewAll";

const meta = {
  title: "GalleryCarousel/CardViewAll",
  component: CardViewAll,
  tags: ["autodocs"],
} satisfies Meta<typeof CardViewAll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDefault: Story = {
  args: {
    appearance: "default",
  },
};
