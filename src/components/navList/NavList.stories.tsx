import { Meta, StoryObj } from "@storybook/react";
import NavList from "./NavList";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof NavList> = {
  title: "UI Components/NavList",
  component: NavList,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const navList: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (data,...args) => <BrowserRouter>
    <NavList {...data}
    /></BrowserRouter>,
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