import React, { Component } from 'react';
import * as actions from '../actions'
import Posts from '../components/Posts.container';
import RaisedButton from 'material-ui/RaisedButton';

class CategoryPosts extends Component{

    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch({ type: actions.REQUEST_POSTS_WITH_CATEGORY, category: match.params.category })
    }

    render() {
        const { posts, history } = this.props;

        const style = {
            margin: 12,
        };

        return (
            <div>
                <Posts posts={posts}/>
                <RaisedButton label="Back" onClick={() => history.push('/')} primary={true} style={style} />
            </div>
        );
    }
}

export default CategoryPosts;
