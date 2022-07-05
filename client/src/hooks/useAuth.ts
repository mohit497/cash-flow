import axios from "axios";
import { useNavigate } from "react-router-dom";
import useNotifications from "./useNotifications";
import jwt_decode from "jwt-decode";
import { RegisterForm } from "components/register";
import { useApolloClient } from "@apollo/client";

export function useAuth() {
  const navigate = useNavigate();
  const { showNotifications } = useNotifications();
  const client = useApolloClient();


  const login = (username: string, password: string) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.access_token);
          try {
            const temp: any = jwt_decode(
              window.localStorage.getItem("token") as string
            );
            localStorage.setItem("role", temp.role.toUpperCase());
          } catch {}
          navigate("/");
        } else {
          showNotifications("Wrong UserName or Password", "danger");
        }
      })
      .catch((e) => {
        console.error(e);
        showNotifications("Wrong UserName or Password", "danger");
      });
  };

  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.clear();
    localStorage.clear();
    client.clearStore()
    navigate("/login");
  };
  const register = (form: RegisterForm) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, form)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.access_token);
          try {
            const temp: any = jwt_decode(
              window.localStorage.getItem("token") as string
            );
            localStorage.setItem("role", temp.role.toUpperCase());
          } catch {}
          navigate("/");
        } else {
          showNotifications("Wrong UserName or Password", "danger");
        }
      })
      .catch((e) => {
        console.error(e);
        showNotifications("Wrong UserName or Password", "danger");
      });
  };

  const switchRole = (role_id: string) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/auth/switch`, { role_id })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.access_token);
          try {
            const temp: any = jwt_decode(
              window.localStorage.getItem("token") as string
            );
            localStorage.setItem("role", temp.role.toUpperCase());
          } catch {}
          navigate("/");
        } else {
          showNotifications("Wrong UserName or Password", "danger");
        }
      })
      .catch((e) => {
        console.error(e);
        showNotifications("Wrong UserName or Password", "danger");
      });
  };

  return { login, isLoggedIn, logout, register, switchRole };
}
