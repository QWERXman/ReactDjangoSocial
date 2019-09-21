import React, { Component } from "react";
import { NewsItem } from "../../entities/News";
import { Card, Image, Icon } from "semantic-ui-react";

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

export class News extends Component {
    public render() {
        return (
            <div>
                <Card.Group  itemsPerRow={2}>
                    {newsItems.map( item => (
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

    selectMenuItem(id: number): void {
        
        this.setState({
            ...this.state,
            activeKey: id
        })        
    }
}