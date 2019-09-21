import { CHANGE_ROUTE } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const chengeRoute = (id: number): ChengeRouteActionType => {
    return {
        type: CHANGE_ROUTE,
        id
    }
}

export interface ChengeRouteActionType extends BaseActionType  {
    id: number
}