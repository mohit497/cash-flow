
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useNotifications from './useNotifications'
import jwt_decode from "jwt-decode";

export function useAuth() {

    const navigate = useNavigate()
    const { showNotifications } = useNotifications();

    const login = (username: string, password: string) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password })
            .then((res) => {
                if (res.status === 201) {
                    localStorage.setItem('token', res.data.access_token);
                    try {
                        const temp: any = jwt_decode(window.localStorage.getItem("token") as string);
                        sessionStorage.setItem('role', temp.role.toUpperCase())
                      } catch {}
                    navigate('/')
                } else {
                    showNotifications('Wrong UserName or Password', 'danger')
                }

            }).catch((e) => {
                console.error(e)
                showNotifications('Wrong UserName or Password', 'danger')
            })
    }

    const isLoggedIn = () => {

        if (localStorage.getItem('token')) {
            return true
        }

        return false
    }

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/login')
    }

    return { login, isLoggedIn, logout }



}
