import { BaseActionType } from 'actions/base'
import { SET_PROFILE_NEWS_LIST } from './actionTypes'
import { NewsEntitie } from 'entities/News'


export const setMyNewsList = (data: NewsEntitie[]): ProfileEntitieActionType => {
    return {
        type: SET_PROFILE_NEWS_LIST,
        newsList: data
    }
}


export interface ProfileEntitieActionType extends BaseActionType {
    newsList:  NewsEntitie[]
}
