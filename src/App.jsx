import { Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import Oops from "./components/oops";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Oops />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
