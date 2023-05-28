import { useEffect, useState } from "react";
import AuthForm, { OutputAuthForm } from "../../components/authForm/AuthForm";
import { clearError, selectAuth, sendAuth } from "../../store/authState";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styles from "./AuthPage.module.css";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modalWindow/Modal";
import { useNavigate } from "react-router-dom";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [googleUser, setGoogleUser] = useState<
    Omit<TokenResponse, "error" | "error_description" | "error_uri"> | null
  >(null);
  const authState = useAppSelector(selectAuth);
  const handleAuth = (data: OutputAuthForm) => {
    dispatch(sendAuth(data));
    return undefined;
  }

  const handleGoogle = () => {
    googleLogin();
  }

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleModalClose = () => {
    dispatch(clearError());
    navigate('/');
  }

  useEffect(() => {
    const uriParams = new URLSearchParams(document.location.hash);
    if (uriParams.get('#access_token')) {
      dispatch(sendAuth({
        expiresIn: Number(uriParams.get('expires_in')) ?? 0,
        accessToken: uriParams.get('#access_token') ?? '',
        typeOfData: 'vk',
        userId: 51637196,
      }))
    }
  }, [document.location.hash]);

  useEffect(() => {
    if (googleUser?.access_token) {
      const token = googleUser.access_token;
      if (token !== null) {
        dispatch(sendAuth({
          typeOfData: 'google', accessToken: token,
        }))
      }
    }
  }, [googleUser]);

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate('/');
    }
  }, [authState]);

  return (
    <div className={styles.auth}>
      <AuthForm handleSubmit={handleAuth} handleGoogle={handleGoogle} />

      {authState.status === 'loading' && <Loader />}

      {authState.status === 'rejected' && <Modal
        handleClose={handleModalClose}
        headerId={"modal_error_header"}
        body={authState.error} />
      }

    </div>
  );
};

export default AuthPage;
