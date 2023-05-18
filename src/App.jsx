import { useState } from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import "antd/dist/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
