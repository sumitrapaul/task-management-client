import axios from "axios";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const secureData = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    secureData.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.error("interceptors", error.response);

        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              Navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, []);
  return secureData;
};

export default useAxiosSecure;
