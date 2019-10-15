import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as friendsActions from '../../actions/friends';
import { isVoidTypeAnnotation } from "@babel/types";
import { List, Image, Input} from 'semantic-ui-react'

class Friends extends Component<any,any> { 
  constructor(props: any, state: any) {
    super(props, state);
    this.state = {
        
    }
}
    componentDidMount() {
      this.setState({
        peoples: [
          {id:1, name:'inna', surname:'petrova', date:'12.04.2002', avatar:'https://react.semantic-ui.com/images/avatar/small/rachel.png'},
          {id:2, name:'evgeniya', surname:'myagkova', date:'12.05.2002', avatar:'https://react.semantic-ui.com/images/avatar/small/lindsay.png'},
          {id:3, name:'daniil', surname:'smirnov', date:'12.04.2005', avatar:'https://react.semantic-ui.com/images/avatar/small/matthew.png'},
          {id:4, name:'sveta', surname:'ivanova', date:'12.04.2001', avatar:'https://react.semantic-ui.com/images/avatar/small/jenny.jpg'},
          {id:5, name:'iliya', surname:'kuznetcov', date:'12.04.2012', avatar:'https://react.semantic-ui.com/images/avatar/small/matthew.png'},
          {id:6, name:'ivan', surname:'ivanov', date:'12.04.2001', avatar:'https://react.semantic-ui.com/images/avatar/small/matthew.png'},
        ]
      })
    }

    public render() {
        return (
            <div>
              <Input icon='users' iconPosition='left' placeholder='Search users...' onChange={this.onChangeSearchString}/>
              <List>
                {this.state.peoples && this.state.peoples.map( (people:any) => (
                  <List.Item>
                    <Image avatar src={people.avatar} />
                    <List.Content>
                      <List.Header as='a'>{people.name}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </div>
        );
    }
    onChangeSearchString(e:any){
     
      if(e.target.value.length <= 3){
        return
      }  
      console.log(e.target.value)
      console.log('Izmeenil')
    }
}



const mapStateToProps = ({ items }: any) => ({
    items: []
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(friendsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friends);