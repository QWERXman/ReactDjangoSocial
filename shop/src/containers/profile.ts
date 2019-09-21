import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../actions/profile';
import { Profile } from '../components/Profile/Profile';

const mapStateToProps = ({ items }: any) => ({
    items: []
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(profileActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);