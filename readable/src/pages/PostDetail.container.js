import { connect } from 'react-redux';
import PostDetail from './PostDetail';

const mapStateToProps = state => ({
    post: state.PostReducer.post,
    comments: state.PostReducer.comments,
});

export default connect(mapStateToProps)(PostDetail);