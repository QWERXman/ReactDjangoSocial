import { RoutesEntitie } from "../entities/Routes"
import { PROFILE, NEWS, FRIENDS, MESSAGES } from '../constants/routes'

import News from "../containers/news"
import Profile from "../containers/profile"
import Friends from "../containers/friends"
import Messages from "../containers/messages"

export const RoutesItems: RoutesEntitie[] = [{
    id: 0,
    text: 'profile',
    icon: 'address card outline',
    component: Profile,
    path: PROFILE
}, {
    id: 1,
    text: 'news',
    icon: 'newspaper outline',
    component: News,
    path: NEWS
}, {
    id: 2,
    text: 'friends',
    icon: 'address book outline',
    component: Friends,
    path: FRIENDS
}, {
    id: 3,
    text: 'messages',
    icon: 'envelope outline',
    component: Messages,
    path: MESSAGES
}]