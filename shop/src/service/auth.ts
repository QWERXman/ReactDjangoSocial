import axios from 'axios'
import { DEFAULT_API_URL } from './constants'
import Service from './base'


export function login(username: string, pass: string, callback?: Function) {
    if (axios.defaults.headers.Authorization) {
        if (callback) callback(true); 
    }
    getToken(username, pass, (res: any) => {
        if (res.authenticated) {
            axios.defaults.headers = {
                'Authorization': 'Token ' + res.token,
                'Content-Type': 'application/json'
            }
            if (callback) callback(true);
        } else {
            if (callback) callback(false);
        }
    })
}    
    
export function logout() {
    delete axios.defaults.headers.Authorization;
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