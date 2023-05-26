import { Meta, StoryObj } from "@storybook/react"
import YearsFilter from "./YearsFilter"
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: 'Filters/YearsFilter',
  component: YearsFilter,
  tags: ['autodocs'],
} satisfies Meta<typeof YearsFilter>

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

export const yearsFilter: Story = {
  args: {
    items: yearsList,
  },render:()=>(<MemoryRouter><YearsFilter/></MemoryRouter>)
}