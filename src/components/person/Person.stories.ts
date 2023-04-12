import { Meta, StoryObj } from '@storybook/react';
import Person from './Person';

const meta = {
  title: "Persons",
  component: Person,
  tags: ["autodocs"],
} satisfies Meta<typeof Person>;

export default meta;

type Story = StoryObj<typeof meta>;

export const director: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "director",
  },
};

export const actor: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "actor",
  },
};

export const producer: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "producer",
  },
};

export const operator: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "operator",
  },
};

export const screenwriter: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "screenwriter",
  },
};

export const composer: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "composer",
  },
};

export const montage: Story = {
  args: {
    firstName: "first name",
    lastName: "last name",
    profession: "montage",
  },
};