import { connect } from 'react-redux';
import Comments from './Comments';

const mapStateToProps = state => ({
    comments: state.PostReducer.comments
});

export default connect(mapStateToProps)(Comments);