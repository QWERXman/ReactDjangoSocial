import { TRY_LOGIN, LOG_OUT } from './actionTypes'
import { BaseActionType } from 'actions/base'


export interface tryLoginActionType extends BaseActionType {
    login: string,
    pass: string
}

export const tryLogin = (login: string, pass: string): tryLoginActionType => {
    return {
        type: TRY_LOGIN,
        login,
        pass
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}