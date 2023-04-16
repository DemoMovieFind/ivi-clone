import { Meta, StoryObj } from '@storybook/react';

import SignUpForm from './SignUpForm';

const meta = {
  title: "Forms/SignUpForm",
  component: SignUpForm,
  tags: ["autodocs"],
} satisfies Meta<typeof SignUpForm>;

export default meta;

export const Default: Story = {
  args: {
    onHandleSubmit: undefined
  },
};

type Story = StoryObj<typeof meta>;

export const signInForm: Story = {}
