import styles from "./AuthIcon.module.css";
import { IconButton } from "../buttons/IconButton/IconButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logOut, selectAuth } from "../../store/authState";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

const AuthIcon = ({href='/auth'}) => {
  const authState = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const [authenticated,setAuthenticated] = useState(false);
  const handleLogOut = () => {
    dispatch(logOut())
  }

  useEffect(()=>{
    if (authState.isAuthenticated) {
      setAuthenticated(true)
    } else setAuthenticated(false);
  },[authState]);

  return (
    <div className={styles.user}>
      { !authenticated 
        ? <IconButton 
          title={intl.formatMessage({id:'auth_title_log_in'})} 
          name='user' 
          href={href} 
          appearance="default" /> 
        : <div className={styles.authenticated}>
            <span 
              className={styles.userInfo}>
                {`${intl.formatMessage({id:'auth_greeting'})}: ${authState.decoded?.email}`}
            </span>
            <IconButton 
              title={intl.formatMessage({id:'auth_title_log_out'})} 
              name='logout' 
              onPointerDown={handleLogOut}
            />
          </div> 
      }
    </div>
  )

}

export default AuthIcon;