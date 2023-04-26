import styles from "./AuthIcon.module.css";
import { IconButton } from "../buttons/IconButton/IconButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logOut, selectAuth } from "../../store/authState";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

const AuthIcon = ({href='/auth',adminRef='/admin'}) => {
  const authState = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  const [authenticated,setAuthenticated] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const handleLogOut = () => {
    dispatch(logOut())
  }

  useEffect(()=>{
    if (authState.isAuthenticated) {
      setAuthenticated(true)
      if (authState.decoded?.roles.find(role=>role.value==='admin')) {
        setIsAdmin(true);
      }
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
            <div className={styles.buttons}>
              <IconButton 
              title={intl.formatMessage({id:'auth_title_log_out'})} 
              name='logout' 
              onPointerDown={handleLogOut}
            />
            {isAdmin && !isAdminPage && <IconButton 
              name='admin' 
              href={adminRef}
              title={intl.formatMessage({id:'auth_title_admin_page'})}
            />}
            </div>
          </div> 
      }
    </div>
  )

}

export default AuthIcon;