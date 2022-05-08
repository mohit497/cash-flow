
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useNotifications from './useNotifications'

export function useAuth() {

    const navigate = useNavigate()
    const { showNotifications } = useNotifications();

    const login = (username: string, password: string) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password })
            .then((res) => {
                console.log(res.status, '$$$$')
                if (res.status === 201) {
                    localStorage.setItem('token', res.data.access_token);
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
