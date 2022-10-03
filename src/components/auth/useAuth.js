import { useContext } from "react";
import UserContext from "./userContext";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
