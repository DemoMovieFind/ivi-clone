import { Meta, StoryObj } from "@storybook/react";
import NavList from "./NavList";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof NavList> = {
  title: "UI Components/NavList",
  component: NavList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const navList: Story = {
  render: (data) => <MemoryRouter>
    <NavList {...data}
    /></MemoryRouter>,
    args: {
      vertical: false,
      links:[
        {
          href:'/',
          translationId:'nav_list_films',
        },
        {
          href:'/',
          translationId:'nav_list_series',
        },
        {
          href:'/',
          translationId:'nav_list_certificate_activation',
          marked:true, 
        }
      ],
      headerTranslationId:''
    }
};
export default meta;
