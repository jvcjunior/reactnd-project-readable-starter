import { connect } from 'react-redux';
import CategoryPosts from './CategoryPosts';

const mapStateToProps = state => ({
    posts: state.postsReducer.items
});

export default connect(mapStateToProps)(CategoryPosts);