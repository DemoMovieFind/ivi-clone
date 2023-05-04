import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { store } from "./store/store";
import AuthPage from "./pages/auth/AuthPage";
import "./index.css";
import Template from "./pages/Template";
import FilmsPage from "./pages/films/FilmsPage";
import PrivateRoute from "./routes/PrivateRoute";
import AdminPage from "./pages/admin/AdminPage";
import PageNotFound from "./pages/notFound/PageNotFound";
import ChangePage from "./pages/change/ChangePage";
import FilmWatchCard from "./components/filmWatchCard/FilmWatchCard";
import PersonCard from "./components/personCard/PersonCard";
import AboutFilmContainer from "./pages/aboutFilmContainer/AboutFilmContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template content={<MainPage />} />} />
          <Route path="/auth" element={<Template content={<AuthPage />} />} />
          <Route path="/movies" element={<Template content={<FilmsPage />} />} />
          <Route element={<PrivateRoute />}>
            <Route path='/admin' element={<Template isAdminPage={true} content={<AdminPage />} />} />
            <Route path='/admin/:id' element={<Template isAdminPage={true} content={<ChangePage />} />} />
          </Route>
          <Route path="/movies/:id" element={<Template content={<FilmWatchCard />} />} />
          <Route path="/movies/:id/comments" element={<Template content={<AboutFilmContainer props={'comments'} />} />} />
          <Route path="/movies/:id/persons" element={<Template content={<AboutFilmContainer props={'persons'} />} />} />
          <Route path="/persons/:id" element={<Template content={<PersonCard />} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
