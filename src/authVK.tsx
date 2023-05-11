import React from "react";

export default function LoginVKPage() {
  const auth = () => {
    const code = document.location.search;
    fetch(
      `https://oauth.vk.com/access_token?client_id=51640846&client_secret=qBziVEz4TLY99LYBDfRf&redirect_uri==http://localhost:3000&code=${code}`,
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.ok)
      .then((data) => console.log(data));
  };
  return (
    <div>
      LoginVKPage
      <a href="https://oauth.vk.com/authorize?client_id=51640846&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=code&v=5.131">
        <div>Авторизация</div>
      </a>
      <button onClick={auth}>Получить Токен</button>
    </div>
  );
}
