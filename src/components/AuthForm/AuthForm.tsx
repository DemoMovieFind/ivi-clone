import { useState } from "react";
import { Button } from "../buttons/Button";
import SignInForm from "./SignInForm";
import { useIntl } from "react-intl";
import SignUpForm from "./SignUpForm";
import styles from './AuthForm.module.css';
import iconButtonStyles from '../buttons/IconButton/IconButton.module.css';
import { FieldValues } from "react-hook-form";
import { IconButton } from "../buttons/IconButton/IconButton";
import { ImgIcon } from "../icons/ImgIcon";

export type OutputAuthForm = {
  email?:string,
  password?:string,
  accessToken?:string,
  expiresIn?:number,
  typeOfData:'signin'|'signup'|'vk'|'google',
  userType?:'user'|'admin',
  userId?:number,
}

export type AuthFormProps = {
  handleSubmit:(data:OutputAuthForm) => void,
  handleGoogle:() => void,
}

const AuthForm = ({ handleSubmit, handleGoogle }:AuthFormProps) => {
  const intl = useIntl();
  const handleForm = (data:FieldValues) => {
    const { email, password,confirmPassword,userType } = data;
    const dataToSend:OutputAuthForm = {
      email,
      password,
      typeOfData:confirmPassword === undefined ? 'signin' : 'signup',
      userType,
    }
    handleSubmit(dataToSend);
  }
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
        data-testid="auth-switch-form-btn"
        onPointerDown={handleFormSwitch} 
        appearance='default' 
        size="small" 
        children={intl.formatMessage({id:textId})}/>
      <div className={styles.buttonWrapper}>
        <IconButton 
          name="vk" 
          href="https://oauth.vk.com/authorize?client_id=51637196&display=page&redirect_uri=http://localhost:3006/auth&response_type=token&v=5.131"
        />
        <Button 
          className={iconButtonStyles.button} 
          onPointerDown={handleGoogle} 
          children={<ImgIcon appearance="google" className={styles.icon} />}/>
      </div>
    </div>
  )
}

export default AuthForm;