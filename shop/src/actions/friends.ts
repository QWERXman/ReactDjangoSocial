import { SELECT_FRIEND } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const selectFriend = (id: number): selectFriendActionType => {
    return {
        type: SELECT_FRIEND,
        id
    }
}

export interface selectFriendActionType extends BaseActionType {
    id: number
}
