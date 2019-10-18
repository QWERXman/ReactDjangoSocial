import React, { Component } from 'react'
import { Image, Icon, Card } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as createNewsActions from './actions';
import { NewsEntitie } from '../../../entities/News';
import { toDate, formatUserDate } from 'helpers/date'
import './ProfileNewsList.css'


interface IProfileNewsListState extends NewsEntitie {
    modalOpen: boolean
}

interface IProfileNewsListProps {
    newsList: NewsEntitie[],
    className?: string
}

class ProfileNewsList extends Component<IProfileNewsListProps, IProfileNewsListState> {

    constructor(props: IProfileNewsListProps, state: IProfileNewsListState) {
        super(props, state);
    }
    
    render() {
        return (
            <Card.Group  itemsPerRow={1} className={this.props.className}>
                    {this.props.newsList && this.props.newsList.map( item => (
                            <Card key={item.id}>
                                <Image src={item.image} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Description>
                                        {item.text}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                        {formatUserDate(toDate(item.createDate, '-'))}
                                </Card.Content>
                            </Card>
                    ))}
                </Card.Group>
        )
    }
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(createNewsActions, dispatch)
});

const CreateNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileNewsList);

export default CreateNewsContainer