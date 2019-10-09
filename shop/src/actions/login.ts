import { CHANGE_LOGIN, CHANGE_PASSWORD, TRY_LOGIN, LOG_OUT } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const changeLogin = (e: React.ChangeEvent<HTMLInputElement>): changeLoginActionType => {
    return {
        type: CHANGE_LOGIN,
        login: e.target.value
    }
}

export interface changeLoginActionType extends BaseActionType {
    login: string
}


export const changePassword = (e: React.ChangeEvent<HTMLInputElement>): changePasswordActionType => {
    return {
        type: CHANGE_PASSWORD,
        password: e.target.value
    }
}

export interface changePasswordActionType extends BaseActionType {
    password: string
}


export const tryLogin = () => {
    return {
        type: TRY_LOGIN
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}