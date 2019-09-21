import { EDIT_NAME } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const editName = (name: string): editNameActionType => {
    return {
        type: EDIT_NAME,
        name
    }
}

export interface editNameActionType extends BaseActionType {
    name: string
}
