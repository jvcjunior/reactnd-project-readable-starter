import React, { Component } from 'react';
import * as actions from '../actions'
import Posts from '../components/Posts.container';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch({ type: actions.REQUEST_POSTS })
    }

    render() {
        const { posts } = this.props;
        return (
            <Posts posts={posts}/>
        );
    }
}

export default Home;