import { Meta, StoryObj } from "@storybook/react"
import SelectCard from "./SelectCard"

const meta = {
  title: 'Filters/selectCard',
  component: SelectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectCard>

export default meta;
type Story = StoryObj<typeof meta>

const yearsList = [
  '2023', '2022',
  '2021', '2020',
  '2019', '2018',
  '2017', '2016',
  '2022-2023', '2021-2022',
  '2020-2022', '2019-2020',
  '2010-2020', '2010-2015',
  '2000-2010', '1990-2000',
  '1980-1990', 'до 1980',
]

export const selectCardYears: Story = {
  args: {
    items: yearsList,
  }
}