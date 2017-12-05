import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        //this.props.fetchPosts();
        const { dispatch } = this.props
        dispatch({type: 'USER_FETCH_SUCCEEDED'})
    }

    render() {
        const { records } = this.props;

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

const stateToProps = state => ({
    posts: state.posts.data
});

const dispatchToProps = {
    //fetchPosts
};

export default connect()(App);
//export default App;