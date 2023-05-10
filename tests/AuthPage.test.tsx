import {screen} from '@testing-library/react';
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
    screen.debug();
    expect(mainTitleSingUpForm).toBeInTheDocument();
  })
})