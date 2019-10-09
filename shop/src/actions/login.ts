import { CHANGE_LOGIN, CHANGE_PASSWORD, TRY_LOGIN } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const changeLogin = (login: string): changeLoginActionType => {
    return {
        type: CHANGE_LOGIN,
        login
    }
}

export interface changeLoginActionType extends BaseActionType {
    login: string
}


export const changePassword = (password: string): changePasswordActionType => {
    return {
        type: CHANGE_PASSWORD,
        password
    }
}

export interface changePasswordActionType extends BaseActionType {
    password: string
}


export const tryLogin = (login: string) => {
    return {
        type: TRY_LOGIN
    }
}