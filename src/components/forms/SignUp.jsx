import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../auth/service";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signup(user);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="authForm">
        <label htmlFor="username" className="authLabel">
          username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.username}
        />
        <label htmlFor="email" className="authLabel">
          password
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.email}
        />

        <label htmlFor="password" className="authLabel">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.password}
        />

        {error && <h5 className="error">{error}</h5>}
        <button className="authButton">sign up</button>
      </form>
    </>
  );
};

export default SignUp;
