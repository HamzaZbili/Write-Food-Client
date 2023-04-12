import { useState, useEffect, React } from "react";
import UserContext from "./userContext";
import service from "./service";

const UserWrapper = ({ children }) => {
  const [auth, setAuth] = useState({
    currentUser: null,
    isLoading: true,
    isLoggedIn: false,
  });

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      try {
        const user = await service.isLoggedIn();
        setAuth({ currentUser: user, isLoading: false, isLoggedIn: true });
      } catch (error) {
        setAuth({ currentUser: null, isLoading: false, isLoggedIn: false });
      }
    } else {
      setAuth({ currentUser: null, isLoading: false, isLoggedIn: false });
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  // the useCallback hook allow us to save (memoize) those functions so that they don't need to be created everytime we rerender
  const removeUser = () => {
    removeToken();
    authenticateUser();
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authValues = {
    currentUser: auth.currentUser,
    isLoading: auth.isLoading,
    isLoggedIn: auth.isLoggedIn,
    removeUser,
    storeToken,
    authenticateUser,
  };

  return (
    <UserContext.Provider value={authValues}>{children}</UserContext.Provider>
  );
};

export default UserWrapper;
