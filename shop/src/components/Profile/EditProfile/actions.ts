import { BaseActionType } from 'actions/base'
import { ProfileEntitie, ProfileEntitieBL } from 'entities/Profile'
import { EDIT_PROFILE_DATA } from './actionTypes'


export const editProfileData = (data: ProfileEntitieBL): ProfileEntitieActionType => {
    return {
        type: EDIT_PROFILE_DATA,
        name: data.name, 
        secondName: data.second_name,
        avatar: data.avatar, 
        status: data.status, 
        birthday: data.birthday, 
        city: data.city
    }
}


export interface ProfileEntitieActionType extends BaseActionType, ProfileEntitie {

}
