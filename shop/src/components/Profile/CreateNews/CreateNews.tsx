import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as createNewsActions from './actions';
import { NewsService } from '../../../service/news'
import { NewsEntitie } from '../../../entities/News'

import './CreateNews.css'


interface ICreateNewsState extends NewsEntitie {
    modalOpen: boolean
}

interface ICreateNewsProps {
    createNews: (data: NewsEntitie) => createNewsActions.ProfileEntitieActionType;
}

class CreateNews extends Component<ICreateNewsProps, ICreateNewsState> {

    constructor(props: ICreateNewsProps, state: ICreateNewsState) {
        super(props, state);
        this.state = {
            modalOpen: false,
            title: '',
            text: '',
            image: ''
        }

    }

    handleOpen = () => this.setState({ modalOpen: true })
    hendleClose = () => this.setState({ modalOpen: false })

    tryCreateNews = async () => {
        NewsService.createNews({
            title: this.state.title,
            text: this.state.text,
            image: this.state.image
        }).then(data => this.props.createNews(data))
        this.setState({ ...this.state, modalOpen: false })
    }

    onSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, title: e.target.value})
    onSetText = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, text: e.target.value})
    onSetImage = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, image: e.target.value})
    
    render() {
        return (
            <Modal
                trigger={<Button className="Profile-Posts-CreateNews__AddPostButton" size="mini" onClick={this.handleOpen}>Add new post</Button>}
                open={this.state.modalOpen}
                onClose={this.hendleClose}
            >
                <Header icon='browser' content='Edit profile data' />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input placeholder='Name' value={this.state.title} onChange={this.onSetTitle}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Text</label>
                            <input placeholder='Second name' value={this.state.text} onChange={this.onSetText}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Image</label>
                            <input placeholder='Image' value={this.state.image} onChange={this.onSetImage}/>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                <Button color='green' onClick={this.tryCreateNews} inverted>
                    <Icon name='checkmark' /> Save
                </Button>
                </Modal.Actions>
            </Modal>
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
)(CreateNews);

export default CreateNewsContainer