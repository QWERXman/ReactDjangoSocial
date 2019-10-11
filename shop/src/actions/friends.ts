import { SELECT_FRIEND } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const selectFriend = (id: number): SelectFriendActionType => {
    return {
        type: SELECT_FRIEND,
        id
    }
}

export interface SelectFriendActionType extends BaseActionType {
    id: number
}
