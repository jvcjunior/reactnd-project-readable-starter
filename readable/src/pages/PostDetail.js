import React, { Component } from 'react';
import * as actions from '../actions';
import Post from '../components/Post';
import Comments from '../components/Comments.container';
import RaisedButton from 'material-ui/RaisedButton';

class PostDetail extends Component {
    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch(actions.requestPostDetails(match.params.post_id))
    }

    render() {
        const { post, history } = this.props;
        const style = {
            margin: 12,
        };
        return (
            <div className="app">
                <Post post={post} />
                <Comments {...this.props} />
                <RaisedButton label="Back" onClick={() => history.push(`/${post.category}`)} primary={true} style={style} />
            </div>
        );
    }
}

export default PostDetail;