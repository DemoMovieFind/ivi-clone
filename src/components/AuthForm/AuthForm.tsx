import { useState } from "react";
import { Button } from "../buttons/Button";
import SignInForm from "./SignInForm";
import { useIntl } from "react-intl";
import SignUpForm from "./SignUpForm";
import styles from './AuthForm.module.css';
import { FieldValues } from "react-hook-form";

export type OutputAuthForm = {
  email:string,
  password:string,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AuthForm = ({handleSubmit =(data:OutputAuthForm)=>undefined}) => {
  const handleForm = (data:FieldValues) => {
    const {email,password} = data;
    const dataToSend:OutputAuthForm = {
      email,
      password,
    }
    handleSubmit(dataToSend)
  }
  const intl = useIntl();
  const signInForm = <SignInForm onHandleSubmit={handleForm}/>;
  const signUpForm = <SignUpForm onHandleSubmit={handleForm}/>;
  const [form,setForm] = useState(signInForm);
  const [typeOfForm,setTypeOfForm] = useState<'signin'|'signup'>('signin');
  const [textId,setTextId] = 
    useState<'sign_up_have_account'|'sign_up_have_not_account'>('sign_up_have_not_account');

  const handleFormSwitch = () => {
    if (typeOfForm === 'signin') {
      setForm(signUpForm);
      setTypeOfForm('signup');
      setTextId('sign_up_have_account');
    } else {
      setForm(signInForm);
      setTypeOfForm('signin');
      setTextId('sign_up_have_not_account');
    }
  }

  return (
    <div className={styles.auth}>
      {form}
      <Button 
        onPointerDown={handleFormSwitch} 
        appearance='default' 
        size="small" 
        children={intl.formatMessage({id:textId})}/>
    </div>
  )
}

export default AuthForm;