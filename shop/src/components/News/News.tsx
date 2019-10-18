import React, { Component } from "react";
import { NewsEntitie } from "../../entities/News";
import { Card, Image, Icon } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as newsActions from './actions';
import { formatUserDate, toDate } from "helpers/date";

import './News.css';
import { NewsService } from "service/news";


export interface INewsProps {
    items: NewsEntitie[],
    newsList: NewsEntitie[],
    getAllNews: Function,
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
        NewsService.getAllNews().then(data => data ? this.props.getAllNews(data) : null)
    }

    public render() {
        return (
            <div>
                <Card.Group  itemsPerRow={2}>
                    {this.props.newsList && this.props.newsList.map(item => (
                            <Card key={item.id}>
                                <Image src={item.image} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Description>
                                        {item.text}.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    {formatUserDate(toDate(item.createDate, '-'))}  
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


const mapStateToProps = (state: any) => state.news
const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(newsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);