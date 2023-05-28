/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, StoryObj } from "@storybook/react";

import AuthForm from "./AuthForm";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const meta = {
  title: "Forms/AuthForm",
  component: AuthForm,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthForm>;

export default meta;

export const Default: Story = {
  render: (args) => {
    return (
      <Provider store={store}>
        <GoogleOAuthProvider clientId="64086974939-oijgmdetcv1c9a6envjks8qoov02adgp.apps.googleusercontent.com">
          <MemoryRouter>
            <AuthForm
              handleGoogle={args.handleGoogle}
              handleSubmit={args.handleSubmit}
            />
          </MemoryRouter>            
        </GoogleOAuthProvider>
      </Provider>
    );
  },
  // args: {
  //   handleSubmit: (data: OutputAuthForm)=>{},
  //   handleGoogle:()=>void
  // },
};

type Story = StoryObj<typeof meta>;
