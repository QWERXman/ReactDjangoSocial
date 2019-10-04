import { RoutesEntitie } from "../entities/Routes"
import { PROFILE, NEWS, FRIENDS, MESSAGES } from '../constants/routes'

import News from "../containers/news"
import Profile from "../containers/profile"
import Friends from "../containers/friends"
import Messages from "../containers/messages"

export const RoutesItems: RoutesEntitie[] = [{
    id: 0,
    text: 'Profile',
    icon: 'address card outline',
    component: Profile,
    path: PROFILE
}, {
    id: 1,
    text: 'News',
    icon: 'newspaper outline',
    component: News,
    path: NEWS
}, {
    id: 2,
    text: 'Friends',
    icon: 'address book outline',
    component: Friends,
    path: FRIENDS
}, {
    id: 3,
    text: 'Messages',
    icon: 'envelope outline',
    component: Messages,
    path: MESSAGES
}]