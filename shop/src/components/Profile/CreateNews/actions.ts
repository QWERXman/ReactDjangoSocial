import { BaseActionType } from 'actions/base'
import { CREATE_NEWS } from './actionTypes'
import { NewsEntitie } from 'entities/News'


export const createNews = (data: NewsEntitie): ProfileEntitieActionType => {
    return {
        type: CREATE_NEWS,
        title: data.title, 
        text: data.text, 
        image: data.image, 
    }
}


export interface ProfileEntitieActionType extends BaseActionType, NewsEntitie {

}
