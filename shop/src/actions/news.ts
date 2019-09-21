import { SET_NEWS, ADD_TO_FAVORITES } from '../constants/actionTypes'
import { BaseActionType } from './base'

export const setNews = (news: News[]): SetNewsActionType => {
    return {
        type: SET_NEWS,
        news
    }
}
export const addToFavorites = (id: number): AddToFavoritesActionType => {
    return {
        type: ADD_TO_FAVORITES,
        id
    }
}

export interface News {
    id: number,
    text: string,
    image: string
}

export interface SetNewsActionType extends BaseActionType {
    news: News[]
}

export interface AddToFavoritesActionType extends BaseActionType {
    id: number
}