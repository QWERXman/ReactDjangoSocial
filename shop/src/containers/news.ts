import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '../actions/news';
import { News } from '../components/News/News';

const mapStateToProps = ({ items }: any) => ({
    news: items
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(newsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);