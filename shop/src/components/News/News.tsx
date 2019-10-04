import React, { Component } from "react";
import { NewsItem } from "../../entities/News";
import { Card, Image, Icon } from "semantic-ui-react";
import Service from '../../service/base'

import './News.css'

const newsItems = [{
    id: 0,
    text: 'Первая новость',
    image: 'https://avatars.mds.yandex.net/get-pdb/27625/203472834-equus-bass-770-1460572539.88/s1200'
},{
    id: 1,
    text: 'Вторая',
    image: 'asdasdasd'
}, {
    id: 2,
    text: 'Третья',
    image: 'asdasdasd'
},{
    id: 3,
    text: 'Вторая',
    image: 'asdasdasd'
}, {
    id: 4,
    text: 'Третья',
    image: 'asdasdasd'
}]
export interface INewsProps {
    items: NewsItem[],
    activeKey: number
}

export interface INewsState {
    items: NewsItem[],
    activeKey: number
}
export class News extends Component<INewsProps, INewsState> {
    constructor(props: INewsProps, state: INewsState) {
        super(props, state);
        this.state = {
            items: [],
            activeKey: 0
        }
      }

    async componentWillMount() {
        const res = await Service.get('news/');
        const news = this.prepareItems(res.data);
        this.setItems(news);
    }
    public render() {
        return (
            <div>
                <Card.Group  itemsPerRow={2}>
                    {this.state.items && this.state.items.map( item => (
                            <Card key={item.id} onClick={() => this.selectMenuItem(item.id)}>
                                <Image src={item.image} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{item.text}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                        <Icon name='user' />
                                        22 Friends
                                </Card.Content>
                            </Card>
                    ))}
                </Card.Group>
            </div>
        );
    }

    setItems(items: any[]) {
        this.setState({
            ...this.state,
            items: items
        })
    }

    selectMenuItem(id: number): void {      
        this.setState({
            ...this.state,
            activeKey: id
        })        
    }

    prepareItems(items: any[]) {
        let endItems: NewsItem[] = items && items.map(item => {
            return {
                id: item.id,
                text: item.text,
                image: item.image
            }
        })

        return endItems
    }
}