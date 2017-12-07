import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
    posts: state.postsReducer.items
});

export default connect(mapStateToProps)(Home);