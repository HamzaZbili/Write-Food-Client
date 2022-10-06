import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/pages/HomePage";
import Oops from "./components/pages/oops";
import Layout from "./components/global/Layout";
import Signin from "./components/forms/SignIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import AddNewArticle from "./components/forms/AddNewArticle";
import ManageArticles from "./components/pages/ManageArticles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/backdoor" element={<Signin />} />
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
