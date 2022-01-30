import * as React from "react";
import { Routes, Route } from "react-router-dom";
import App from './App';
import SignIn from './pages/signin';
import Success from './pages/success';
import Login from './pages/login';
import PdfPage from './pages/pdf-page';
import Main from './pages/main';


function Router() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="success" element={<Success />} />
        <Route path="login" element={<Login />} />
        <Route path="pdf-page" element={<PdfPage />} />
        <Route path="main" element={<Main />} />
      </Routes>
  );
}

export default Router;