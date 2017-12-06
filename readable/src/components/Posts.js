import React, { Component } from 'react';
import * as actions from '../actions'

class Posts extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch({type: actions.REQUEST_POSTS})
    }

    render() {
        const { posts } = this.props;

        return (
            <div className="app">
                {posts && posts.map(post => (
                    <div className="record" key={post.id}>{post.title}</div>
                ))}
            </div>
        );
    }
}

export default Posts;