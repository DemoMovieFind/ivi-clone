import type { Meta, StoryObj } from "@storybook/react";

import { GenreIcon } from "./GenreIcon";
import RouterWrapper from "../../../../../.storybook/routerWrapper";

const meta = {
  title: "Filters/Genres/GenreIcon",
  component: GenreIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof GenreIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Drama: Story = {
  args: {
    genre: "Драма",
  },
  render:(args)=>RouterWrapper(<GenreIcon genre={args.genre}/>)
};
