import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../auth/service";
import useAuth from "../auth/useAuth";
import "./signIn.css";

const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signin(user);
      storeToken(res);
      await authenticateUser();
      navigate("/manage");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="authForm">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.username}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.password}
        />
        {error && <h5 className="error">{error}</h5>}
        <input type="submit" value="sign in" id="authButton" />
      </form>
    </>
  );
};

export default SignIn;
