import React, { Component } from 'react';
import * as actions from '../actions'
import Posts from '../components/Posts.container';

class CategoryPosts extends Component{

    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch({ type: actions.REQUEST_POSTS_WITH_CATEGORY, category: match.params.category })
    }

    render() {
        const { posts } = this.props;
        return (
            <Posts posts={posts}/>
        );
    }
}

export default CategoryPosts;
