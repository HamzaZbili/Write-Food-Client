import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import Oops from "./components/oops";
import Layout from "./components/Layout";
import Signin from "./components/admin/SignIn";
import PrivateRoute from "./components/admin/PrivateRoute";
import AddNewArticle from "./components/admin/AddNewArticle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/backdoor" element={<Signin />} />
          <Route element={<PrivateRoute />}>
            <Route path="/new" element={<AddNewArticle />} />
          </Route>
          <Route path="*" element={<Oops />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
