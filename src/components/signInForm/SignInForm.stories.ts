import { Meta, StoryObj } from '@storybook/react';

import SignInForm from './SignInForm';

const meta = {
  title: "Forms/SignInForm",
  component: SignInForm,
  tags: ["autodocs"],
} satisfies Meta<typeof SignInForm>;

export default meta;

export const Default: Story = {
  args: {
    onHandleSubmit: undefined
  },
};


type Story = StoryObj<typeof meta>;

export const signInForm: Story = {}