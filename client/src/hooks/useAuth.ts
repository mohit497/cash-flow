
import axios from 'axios'

export function useAuth() {
    const login = (username: string, password: string) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password })
            .then((res) => {
                localStorage.setItem('token', res.data.access_token)
            }).catch((e) => {
                console.error(e)
                localStorage.clear()
            })
    }

    const isLoggedIn = () => {

        if (localStorage.getItem('token')) {
            return true
        }

        return false
    }

    return { login, isLoggedIn }



}
