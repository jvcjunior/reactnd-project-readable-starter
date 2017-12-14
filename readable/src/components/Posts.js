import React, { Component } from 'react';
import * as actions from '../actions'
import Post from './Post';

const Posts = (props) => {
        const { posts } = props;
        return (
            <div>
                {posts && posts.map(post => {
                    <Post post={post} />
                })}
            </div>
        );
}

export default Posts;