import { Meta, StoryObj } from '@storybook/react';
import Person from './Person';

const meta = {
  title: "Persons Components/Persons",
  component: Person,
  tags: ["autodocs"],
} satisfies Meta<typeof Person>;

export default meta;

type Story = StoryObj<typeof meta>;

export const person: Story = {};
