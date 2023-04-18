import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "UI Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: "default",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    appearance: "primary",
    children: "Button",
  },
};

export const Movie: Story = {
  args: {
    appearance: "movie",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const Support: Story = {
  args: {
    style: { width: 196, height: 40, fontSize: 15 },
    children: "Написать в чате",
  },
};

export const СмотретьПоПодписке: Story = {
  args: {
    appearance: "primary",
    style: {
      paddingTop: 9,
      paddingBottom: 9,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: 15,
    },
    children: "Смотреть по подписке",
  },
};
