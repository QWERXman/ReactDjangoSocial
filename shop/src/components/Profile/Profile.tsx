import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";
import Service from '../../service/base'

import './Profile.css'

interface IProfileState {
    name: string | null,
    second_name: string | null,
    avatar: string | null,
    status: string | null,
    birthday: string | null,
    city: string | null,

}

export class Profile extends Component<{}, IProfileState> {
    
    constructor(props: {}, state: IProfileState) {
        super(props, state);
        this.state = {
            name: null,
            second_name: null,
            avatar: null,
            status: null,
            birthday: null,
            city: null,
        }
    }

    async componentWillMount() {
        const user = await Service.get('profiles/current_user/');
        this.setState({
            ...this.state,
            ...user.data[0]
        })
    }

    public render() {
        return (
            <div className="Profile">
                <Image src={this.state.avatar} width="200" height="200" wrapped ui={false} />
                <div className="Profile__Data">
                    <div className="Flexbox">
                        <div className="Profile-Data__UserName">{this.state.name} {this.state.second_name}</div>
                        <div className="Profile-Data__EditBtn">
                            <Button size="mini">Edit</Button>
                        </div>
                    </div>
                    
                    <div className="Profile-Data__Separator"></div>

                    <div className="Profile-Data__UserData">
                        <div className="Profile-Data-UserData__Fields">
                            <span className="Profile-Data-UserData-Fields__Item">Status:</span>
                            <span className="Profile-Data-UserData-Fields__Item">Birthday </span>
                            <span className="Profile-Data-UserData-Fields__Item">Sity:</span>
                        </div>
                        <div className="Profile-Data-UserData__Data">
                            <div className="Profile-Data-UserData-Data__Item">{this.state.status}</div>
                            <div className="Profile-Data-UserData-Data__Item">{this.state.birthday}</div>
                            <div className="Profile-Data-UserData-Data__Item">{this.state.city}</div>
                        </div>  
                    </div>
                                      
                </div>
            </div>
        );
    }
}