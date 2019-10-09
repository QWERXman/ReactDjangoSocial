import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as newsActions from '../actions/news';
import * as routesActions from '../actions/routes';
import App from '../components/App/App';
import { RoutesItems } from '../routes/routes'


const mapStateToProps = () => ({
    items: RoutesItems
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(newsActions, dispatch),
    ...bindActionCreators(routesActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);