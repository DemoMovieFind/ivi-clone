import React, { useEffect } from "react";

export default function LoginVKPage() {
  const pathname = document.location.pathname;

  const [currentUrl, setCurrentUrl] = React.useState(pathname);

  useEffect(() => {
    console.log(document.location.hash);
  }, [currentUrl]);
  return (
    <div>
      LoginVKPage
      <a href="https://oauth.vk.com/authorize?client_id=51640846&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=token&v=5.131">
        <div>Авторизация</div>
      </a>
    </div>
  );
}
