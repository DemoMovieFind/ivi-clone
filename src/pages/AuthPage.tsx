import { useEffect } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { OutputAuthForm } from "../components/AuthForm/AuthForm";
import { selectAuth, sendAuth } from "../store/authState";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuth)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAuth = (data:OutputAuthForm) => {
    dispatch(sendAuth(data));
    return undefined;
  }

  useEffect(()=>{
    console.log('auth state')
    console.log(authState);
  },[authState]);

  return (
    <div className={styles.auth}>
      <AuthForm handleSubmit={handleAuth}/>
    </div>
  );
};

export default AuthPage;
