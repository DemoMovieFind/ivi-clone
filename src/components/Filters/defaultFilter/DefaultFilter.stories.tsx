import type { Meta, StoryObj } from "@storybook/react";

import { DefaultFilter } from "./DefaultFilter";
import RouterWrapper from "../../../../.storybook/routerWrapper";

const meta = {
  title: "Filters/ElementList",
  component: DefaultFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => RouterWrapper(<DefaultFilter />),
  args: {},
};
