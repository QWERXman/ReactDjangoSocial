import { SELECT_MESSAGE } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const selectMessage = (id: number): selectMessageActionType => {
    return {
        type: SELECT_MESSAGE,
        id
    }
}

export interface selectMessageActionType extends BaseActionType {
    id: number
}
