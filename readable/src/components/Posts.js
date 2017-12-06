import React, { Component } from 'react';

class Posts extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch({type: 'USER_FETCH_SUCCEEDED'})
    }

    render() {
        // const { records } = this.props;
        return (
            <div className="app">
                {/* {records.map(record => (
                    <div className="record" key={record.id}>{record.name}</div>
                ))} */}
                APP
            </div>
        );
    }
}

export default Posts;