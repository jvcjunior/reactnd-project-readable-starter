import React, { Component } from 'react';
import * as actions from '../actions';
import Post from '../components/Post';
import Comments from '../components/Comments.container';

class PostDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch(actions.requestPostDetails(match.params.post_id))
    }

    render() {
        const { post } = this.props;
        return (
            <div className="app">
                <Post post={post} />
                <Comments {...this.props} />
            </div>
        );
    }
}

export default PostDetail;