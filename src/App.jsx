import { Routes, Route } from "react-router-dom";
import React from "react";
import "./app.css";
import HomePage from "./components/pages/homepage/HomePage";
import Oops from "./components/pages/error/oops";
import Layout from "./components/global/Layout";
import Signin from "./components/forms/SignIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import AddNewArticle from "./components/pages/admin/AddNewArticle";
import ManageArticles from "./components/pages/admin/ManageArticles";
import AboutMe from "./components/pages/aboutme/AboutMe";
import Contact from "./components/pages/contact/Contact";
import SignUp from "./components/forms/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/backdoor" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/new" element={<AddNewArticle />} />
            <Route path="/manage" element={<ManageArticles />} />
          </Route>
          <Route path="*" element={<Oops />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
