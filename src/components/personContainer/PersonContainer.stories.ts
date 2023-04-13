import { Meta, StoryObj } from '@storybook/react';

import PersonContainer from './PersonContainer';

const meta = {
  title: "PersonContainer",
  component: PersonContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const personContainer: Story = {}