import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as friendsActions from '../actions/friends';
import { Friends } from '../components/Friends/Friends';

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