import { BaseActionType } from 'actions/base'
import { GET_ALL_NEWS } from './actionTypes'
import { NewsEntitie } from 'entities/News'


export const getAllNews = (data: NewsEntitie[]): ProfileEntitieActionType => {
    return {
        type: GET_ALL_NEWS,
        data: data
    }
}


export interface ProfileEntitieActionType extends BaseActionType {
    data: NewsEntitie[]
}
