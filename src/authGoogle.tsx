import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin  } from "@react-oauth/google";
import axios from "axios";

const AuthGooglePage = () => {
  const [user, setUser] = useState<any>(null);

  const [profile, setProfile] = useState<{
    id: string, 
    email: string,
    verified_email: boolean, 
    name: string, given_name: string, 
    picture: string, 
    locale: string, 
  }|null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  if (user.access_token) {
    console.log("Записываем Токен");
    localStorage.setItem("tokenGoogle", user.access_token);
    console.log('user');
    console.log(user);
  }

  useEffect(() => {
    const token = localStorage.getItem("tokenGoogle");
    console.log('token')
    console.log(token);

    if (token !== null) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log("Запрос на профайл");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("tokenGoogle");
  };
  console.log('profile');
  console.log(profile);
  return (
    <div>
      <h2>Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}

export default AuthGooglePage;
