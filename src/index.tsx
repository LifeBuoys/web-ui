import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./routes/Account";
import Disposal from "./routes/Disposal";
import NewDisposal from "./routes/NewDisposal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="account" element={<Account />} />
        <Route path="disposal" element={<Disposal />} />
        <Route path="disposal/new" element={<NewDisposal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

