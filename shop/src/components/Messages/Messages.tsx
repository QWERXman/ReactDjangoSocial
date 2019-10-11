import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messagesActions from '../../actions/messages';


class Messages extends Component {
    public render() {
        return (
            <div>
                Messages
            </div>
        );
    }
}


const mapStateToProps = () => ({
    items: []
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(messagesActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Messages);