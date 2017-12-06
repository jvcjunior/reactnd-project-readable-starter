import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: state.postsReducer.items
});

export default connect(mapStateToProps)(Posts);