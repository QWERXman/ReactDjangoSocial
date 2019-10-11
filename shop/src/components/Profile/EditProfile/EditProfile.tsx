import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import DatePicker from 'react-date-picker'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as editProfileData from './actions';
import { Profile as ProfileService } from '../../../service/profile'
import { formatDate, toDate } from '../../../helpers/date'
import { ProfileEntitie } from '../../../entities/Profile'

import './EditProfile.css'


interface IEditProfileState extends ProfileEntitie {
    modalOpen: boolean,
    birthDate?: Date | Date[]
}

interface IEditProfileProps extends ProfileEntitie {
    editProfileData: Function
}

class EditProfile extends Component<IEditProfileProps, IEditProfileState> {

    constructor(props: IEditProfileProps, state: IEditProfileState) {
        super(props, state);
        this.state = {
            name: '',
            secondName: '',
            modalOpen: false
        }

    }

    async componentWillMount() {
        ProfileService.getCurrent().then(data => data ? this.props.editProfileData(data) : null)
    }

    handleOpen = () => this.setState({ modalOpen: true })
    hendleClose = () => this.setState({ modalOpen: false })

    tryUpdateProfileInfo = async () => {
        ProfileService.setCurrent({
            name: this.state.name,
            second_name: this.state.secondName,
            status: this.state.status,
            birthday: this.state.birthDate ? formatDate(this.state.birthDate as Date, '-') : undefined,
            city: this.state.city
        }).then(data => this.props.editProfileData(data))
        this.setState({ modalOpen: false })
    }

    onSetBirthday = (date: Date | Date[]) => this.setState({...this.state, birthDate: date})
    onSetName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, name: e.target.value})
    onSetSecondName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, secondName: e.target.value})
    onSetStatus = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, status: e.target.value})
    onSetCity = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, city: e.target.value})
    
    render() {
        return (
            <Modal
                trigger={<Button size="mini" onClick={this.handleOpen}>Edit</Button>}
                open={this.state.modalOpen}
                onClose={this.hendleClose}
            >
                <Header icon='browser' content='Edit profile data' />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' value={this.state.name || this.props.name} onChange={this.onSetName}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Second name</label>
                            <input placeholder='Second name' value={this.state.secondName || this.props.secondName} onChange={this.onSetSecondName}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Status</label>
                            <input placeholder='Status' value={this.state.status || this.props.status} onChange={this.onSetStatus}/>
                        </Form.Field>
                        <Form.Field className="EditProfile__BirthdayField">
                            <label>Birthday</label>
                            <DatePicker value={this.state.birthDate || toDate(this.props.birthday, '-')} onChange={this.onSetBirthday}/>
                        </Form.Field>
                        <Form.Field>
                            <label>City</label>
                            <input value={this.state.city || this.props.city} onChange={this.onSetCity}/>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                <Button color='green' onClick={this.tryUpdateProfileInfo} inverted>
                    <Icon name='checkmark' /> Save
                </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

const mapStateToProps = (state: any) => state.profile;

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(editProfileData, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);