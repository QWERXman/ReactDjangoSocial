import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as routesActions from '../actions/routes';
import { Routes } from '../components/Routes/Routes';

const mapStateToProps = ({ items }: any) => ({
    items: items
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(routesActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);