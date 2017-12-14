import React from 'react';
import Post from './Post';
import { withRouter } from 'react-router'

const Posts = (props) => {
    const { posts } = props;
    return (
        <div>
            {posts && posts.map(post => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    );
}

export default withRouter(Posts);