import React, { Component } from 'react';
import * as actions from '../actions'

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
            <div> DETAILS </div>
        );
    }
}

export default PostDetail;