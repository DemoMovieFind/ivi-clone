import type { Meta, StoryObj } from "@storybook/react";

import ButtonLink from "./ButtonLink";
import { BrowserRouter } from "react-router-dom";

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
  render:(args)=>
    <BrowserRouter>
      <ButtonLink {...args}/>
    </BrowserRouter>,
};

export const Primary:Story = {
  args: {
    appearance: "primary",
    children: "Button",
  },
  render:(args)=>
    <BrowserRouter>
      <ButtonLink {...args}/>
    </BrowserRouter>,
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
  render:(args)=>
    <BrowserRouter>
      <ButtonLink {...args}/>
    </BrowserRouter>,
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
  render:(args)=>
    <BrowserRouter>
      <ButtonLink {...args}/>
    </BrowserRouter>,
};

export default meta;
