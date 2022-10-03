import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  console.log(isLoggedIn);

  if (isLoading) return <p>Loading...</p>;
  if (!isLoggedIn) return <Navigate to="/backdoor" />;
  else return <Outlet />;
};

export default PrivateRoute;
