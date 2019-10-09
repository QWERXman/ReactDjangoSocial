import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/login';
import Login from '../components/Login/Login';

const mapStateToProps = () => ({
    username: '',
    is_logged: false
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);