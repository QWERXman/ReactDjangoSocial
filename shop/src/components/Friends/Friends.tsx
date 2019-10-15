import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as friendsActions from '../../actions/friends';


class Friends extends Component {
    public render() {
        return (
            <div>asdasdas</div>
        );
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