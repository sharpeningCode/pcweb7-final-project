import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import User from "./views/User";
import Admin from "./views/Admin";
import Missing from "./views/Missing";

import LeavePageAdd from "./views/LeavePageAdd";
import LeavePageDetails from "./views/LeavePageDetails";
import LeavePageUpdate from "./views/LeavePageUpdate";

// const USER_TYPES = {
//   PUBLIC: 'Public',
//   NORMAL: 'User',
//   ADMIN: 'Admin',
// }

// const CURRENT_USER_TYPE = USER_TYPES.PUBLIC;

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Missing />} />
        <Route path="/add" element={<LeavePageAdd />} />
        <Route path="/details/:id={id}" element={<LeavePageDetails />} />
        <Route path="/update/:id={id}" element={<LeavePageUpdate />} />
      </Routes>
    </BrowserRouter>
    );
}

// function PublicElement({children}) {
//   return <>{children}</>;
// }

// function UserElement({children}) {
//   if (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
//   return <>{children}</>;
//   } else {
//   return <Navigate to={"/missing"} />;
//   };
// }

// function AdminElement({children}) {
//   if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
//   return <>{children}</>;
//   } else {
//   return <Navigate to={"/missing"} />;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();