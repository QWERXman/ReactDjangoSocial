import Service from './base'
import { NewsEntitie } from 'entities/News'

export const NewsService = {
    createNews: (data: NewsEntitie) => Service.post('news/create/', data).then(res => {
        return res.data
    }),
    getMyNews: () => Service.get('news/', {OnlyMy: true}).then(res => {
        return res
    })
}