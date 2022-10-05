import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return <div></div>;
  if (!isLoggedIn) return <Navigate to="/backdoor" />;
  else return <Outlet />;
};

export default PrivateRoute;
