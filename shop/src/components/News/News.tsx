import React, { Component } from "react";
import { NewsEntitie } from "../../entities/News";
import { Card, Image, Icon } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as newsActions from '../../actions/news';
import Service from '../../service/base'

import './News.css'


export interface INewsProps {
    items: NewsEntitie[],
    activeKey: number
}

export interface INewsState {
    items: NewsEntitie[],
    activeKey: number
}

class News extends Component<INewsProps, INewsState> {
    constructor(props: INewsProps, state: INewsState) {
        super(props, state);
        this.state = {
            items: [],
            activeKey: 0
        }
    }

    async componentWillMount() {
        const res = await Service.get('news/');
        const news = this.prepareItems(res);
        this.setItems(news);
    }

    public render() {
        return (
            <div>
                <Card.Group  itemsPerRow={2}>
                    {this.state.items && this.state.items.map( item => (
                        // key={item.id} onClick={() => this.selectMenuItem(item.id)}
                            <Card >
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
        let endItems: NewsEntitie[] = items && items.map(item => {
            return {
                id: item.id,
                text: item.text,
                image: item.image
            }
        })

        return endItems
    }
}

const mapStateToProps = ({ items }: any) => ({
    news: items
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(newsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);