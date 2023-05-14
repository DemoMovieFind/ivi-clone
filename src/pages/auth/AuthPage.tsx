import { useEffect } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { OutputAuthForm } from "../../components/AuthForm/AuthForm";
import { selectAuth, sendAuth } from "../../store/authState";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import styles from "./AuthPage.module.css";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modalWindow/Modal";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authState = useAppSelector(selectAuth);
  const handleAuth = (data:OutputAuthForm) => {
    dispatch(sendAuth(data));
    return undefined;
  }

  const handleModalClose = () => {
    navigate('/');
  }

  useEffect(() => {
    const uriParams = new URLSearchParams(document.location.hash);
    if (uriParams.get('#access_token')) {
      dispatch(sendAuth({
        expiresIn: Number(uriParams.get('expires_in')) ?? 0,
        accessToken:uriParams.get('#access_token') ?? '',
        typeOfData:'vk',
        userId:51637196,
      }))
    }
  }, [document.location.hash]);

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate('/');
    }
  },[authState]);

  return (
    <div className={styles.auth}>
      <AuthForm handleSubmit={handleAuth}/>

      {authState.status === 'loading' && <Loader/>}

      {authState.status === 'rejected' && <Modal 
                                            handleClose={handleModalClose} 
                                            headerId={"modal_error_header"} 
                                            body={authState.error}/>
      }

    </div>
  );
};

export default AuthPage;
