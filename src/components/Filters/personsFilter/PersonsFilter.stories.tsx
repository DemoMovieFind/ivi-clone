import { Meta, StoryObj } from '@storybook/react';
import PersonsFilter from './PersonsFilter';
import RouterWrapper from '../../../../.storybook/routerWrapper';

const meta = {
  title: 'Filters/PersonsFilter',
  component: PersonsFilter,
  tags: ["autodocs"],
} satisfies Meta<typeof PersonsFilter>

export default meta;
type Story = StoryObj<typeof meta>

const people = ["Россия", "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "gypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Italy", "Tanzania", "SouthAfrica", "Myanmar", "Kenya", "South Korea", "Colombia", "Spain", "Uganda", "Argentina", "Algeria", "Sudan", "Ukraine", "Iraq", "Afghanistan", "Poland", "Canada", "Moocco", "Saudi Arabia", "Uzbekistan", "Peru", "Angola", "Malaysia", "Mozambique", "Ghana", "Yemen", "Nepal", "Venezuela"];

export const actorsFilter: Story = {
  args: {
    suggestions: people,
    placeholder: 'actor'
  },
  render:(args) => RouterWrapper(<PersonsFilter {...args}/>)
}

export const directorFilter: Story = {
  args: {
    suggestions: people,
    placeholder: 'director'
  },
  render:(args) => RouterWrapper(<PersonsFilter {...args}/>)
}