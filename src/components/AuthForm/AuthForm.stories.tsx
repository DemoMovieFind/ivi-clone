/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, StoryObj } from '@storybook/react';
import AuthForm, { OutputAuthForm } from './AuthForm';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RouterWrapper from '../../../.storybook/routerWrapper';

const meta = {
  title: "Forms/AuthForm",
  component: AuthForm,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthForm>;

export default meta;

export const authForm: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleSubmit: (data: OutputAuthForm)=>{},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleGoogle:()=>{}
  },
  render:(args) => <Provider store={store}>
      <GoogleOAuthProvider
        clientId="64086974939-oijgmdetcv1c9a6envjks8qoov02adgp.apps.googleusercontent.com">
          {RouterWrapper(<AuthForm  {...args} />)}
      </GoogleOAuthProvider>
    </Provider>,
};

type Story = StoryObj<typeof meta>;

