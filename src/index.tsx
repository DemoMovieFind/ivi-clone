import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import { store } from './store/store';
import AuthPage from './pages/AuthPage';
import './index.css';
import Template from './pages/Template';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Template content={<MainPage/>} />} />
          <Route path='/auth' element={<Template content={<AuthPage/>} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
