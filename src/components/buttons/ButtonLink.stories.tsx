import type { Meta, StoryObj } from "@storybook/react";

import ButtonLink from "./ButtonLink";
import RouterWrapper from '../../../.storybook/routerWrapper';

const meta:Meta<typeof ButtonLink> = {
  title: "UI Components/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Default:Story = {
  args: {
    appearance: "default",
    children: "Button",
  },
  render:(args) => RouterWrapper(<ButtonLink {...args}/>)
};

export const Primary:Story = {
  args: {
    appearance: "primary",
    children: "Button",
  },
  render:(args) => RouterWrapper(<ButtonLink {...args}/>)
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
  render:(args) => RouterWrapper(<ButtonLink {...args}/>)
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
  render:(args) => RouterWrapper(<ButtonLink {...args}/>)
};

export default meta;
