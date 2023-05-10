import {fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AuthPage from '../src/pages/auth/AuthPage';
import TestWrapper from './TestWrapper';

describe('Test Auth Form',() => {

  test('check correct title after switch state',() => {
    TestWrapper(<AuthPage/>)
    const mainTitleSingInForm = screen.getByTestId('sign-in-form-title');
    expect(mainTitleSingInForm).toBeInTheDocument();
    const switchFormBtn = screen.getByTestId('auth-switch-form-btn');
    userEvent.click(switchFormBtn);
    const mainTitleSingUpForm = screen.getByTestId('sign-up-form-title');
    expect(mainTitleSingUpForm).toBeInTheDocument();
  })

  test('check sign in validation',async () => {
    TestWrapper(<AuthPage/>)
    const emailInput = screen.getByTestId('sign-in-input-email');
    fireEvent.input(emailInput,{
      target:{
        value:'12@2'
      }
    })
    const passwordInput = screen.getByTestId('sign-in-input-password');
    fireEvent.input(passwordInput,{
      target:{
        value:'1234567'
      }
    })
    const signInSubmitBtn = screen.getByTestId('sign-in-submit');
    fireEvent.submit(signInSubmitBtn);
    expect(await screen.findByTestId('sign-in-email-error')).toHaveTextContent('Недействительный email адрес');
    expect(await screen.findByTestId('sign-in-password-error')).toHaveTextContent('Пароль должен быть более 8 символов');
  })

  test('check sign up validation',async () => {
    TestWrapper(<AuthPage/>)
    const authSwitchFormBtn = screen.getByTestId('auth-switch-form-btn');
    userEvent.click(authSwitchFormBtn);
    const emailInput = await screen.findByTestId('sign-up-input-email');
    fireEvent.input(emailInput,{
      target:{
        value:'123@123.ru'
      }
    })
    const passwordInput = await screen.findByTestId('sign-up-input-password');
    const confirmPasswordInput = await screen.findByTestId('sign-up-input-confirm-password');
    fireEvent.input(passwordInput,{
      target:{
        value:'12345678'
      }
    })
    fireEvent.input(confirmPasswordInput,{
      target:{
        value:'123456789'
      }
    })
    const signUpSubmitBtn = await screen.findByTestId('sign-up-submit');
    fireEvent.submit(signUpSubmitBtn);
    expect(await screen.findByTestId('sign-up-confirm-password-error')).toHaveTextContent('Пароли не совпадают');
  })

})
