import { RoutesEntitie } from "../entities/Routes"
import { PROFILE, NEWS, FRIENDS, MESSAGES } from '../constants/routes'

import News from "../components/News/News"
import Profile from "../components/Profile/Profile"
import Friends from "../components/Friends/Friends"
import Messages from "../components/Messages/Messages"

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