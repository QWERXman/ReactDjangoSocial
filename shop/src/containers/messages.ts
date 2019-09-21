import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messagesActions from '../actions/messages';
import { Messages } from '../components/Messages/Messages';

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