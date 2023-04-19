import { Meta, StoryObj } from '@storybook/react';
import PersonsFilter from './PersonsFilter';

const meta = {
  title: 'Filters/PersonsFilter',
  component: PersonsFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonsFilter>

export default meta;
type Story = StoryObj<typeof meta>

const people = [
  {
    name: 'Andrew Brown',
    image: ''
  },
  {
    name: 'Charlie Brown',
    image: ''
  },
  {
    name: 'Charlotte White',
    image: 'https://thumbs.dfs.ivi.ru/storage38/contents/b/c/45102370a23e374f4146fe2d106f26.jpeg/88x88/?q=85'
  },
  {
    name: 'Chloe Jones',
    image: ''
  },
  {
    name: 'Cooper King',
    image: ''
  },
  {
    name: 'Омар Си',
    image: 'https://thumbs.dfs.ivi.ru/storage28/contents/5/4/5b9430c9601da3b2b00770fb7e08f0.jpeg/44x44/?q=85'
  },
];

export const actorsFilter: Story = {
  args: {
    persons: people,
    placeholder: 'actors'
  }
}

export const directorFilter: Story = {
  args: {
    persons: people,
    placeholder: 'directors'
  }
}