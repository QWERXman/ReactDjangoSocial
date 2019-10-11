import Service from './base'
import { ProfileEntitieBL } from './../entities/Profile'

export const Profile = {
    getCurrent: () => Service.get('profiles/current_user/').then(res => {
        return res[0]
    }),
    setCurrent: (data: ProfileEntitieBL) => Service.post('profiles/current_user/', data).then(res => res.data)
}