import { Meta, StoryObj } from '@storybook/react';

import AuthForm from './AuthForm';

const meta = {
  title: "Forms/AuthForm",
  component: AuthForm,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthForm>;

export default meta;

export const Default: Story = {
  args: {
    handleSubmit: undefined
  },
};

type Story = StoryObj<typeof meta>;

export const authForm: Story = {}
