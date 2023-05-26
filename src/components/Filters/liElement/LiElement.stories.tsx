import type { Meta, StoryObj } from "@storybook/react";

import { LiElement } from "./LiElement";
import RouterWrapper from "../../../../.storybook/routerWrapper";

const meta = {
  title: "Filters/ElementList",
  component: LiElement,
  tags: ["autodocs"],
} satisfies Meta<typeof LiElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Counties: Story = {
  render: () => RouterWrapper(<LiElement value={"Россия"} argument={"countries"} />),
  args: {
    value: "Россия",
    argument: " countries",
  },
};

export const Genres: Story = {
  render: () => RouterWrapper(<LiElement value={"Драма"} argument={"genres"} />),
  args: {
    value: "Драма",
    argument: " genres",
  },
};
