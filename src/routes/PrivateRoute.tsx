import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectAuth } from '../store/authState';

const PrivateRoute = () => {
  const authState = useAppSelector(selectAuth);
  const userIsAuthenticated = authState.isAuthenticated;
  const userIsAdmin = authState.decoded?.roles.find(role=>role.value === 'admin')!==undefined;
  const userIsAllowedToPass = userIsAuthenticated && userIsAdmin;
  return (
    userIsAllowedToPass ? <Outlet/> : <Navigate to='/auth'/>
  )
}
export default PrivateRoute;