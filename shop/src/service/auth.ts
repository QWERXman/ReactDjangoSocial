import axios from 'axios'
import { DEFAULT_API_URL } from './constants'
import Service from './base'


export function login(username: string, pass: string) {
    getToken(username, pass, (res: any) => {
        window.localStorage.uathToken = res.token;
        if (res.authenticated) {
            axios.defaults.headers = {
                'Authorization': 'Token ' + res.token,
                'Content-Type': 'application/json'
            }
            window.location.reload()
        }
    })
}    

export function logout() {
    delete window.localStorage.uathToken;
    delete axios.defaults.headers.Authorization;
    window.location.reload()
}

export function loggedIn() {
    return !!axios.defaults.headers.Authorization;
}

export function getToken(username: string, pass: string, callback: Function) {
    Service.post('obtain-auth-token/', {
        username: username,
        password: pass
    }).then(response => {
        callback({
            authenticated: true,
            token: response.data.token
        })
    })
}