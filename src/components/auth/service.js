import axios from "axios";

const service = axios.create({
  baseURL: "http://3.11.122.105",
  withCredentials: true,
});

service.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] =
    "http://rachelnaismith.com.s3-website.eu-west-2.amazonaws.com/";
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config, (error) => Promise.reject(error);
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
