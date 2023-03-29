import axios from "axios";

const service = axios.create({
  // baseURL: "https://13.42.201.18:5000",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

service.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

service.isLoggedIn = async () => {
  try {
    const { data } = await service.get("/auth/me");
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

service.signin = async (user) => {
  try {
    const { data } = await service.post("/auth/login", user);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

service.signup = async (user) => {
  try {
    const { data } = await service.post("/auth/signup", user);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default service;
