import React, { Component } from 'react';
import * as actions from '../actions'
import Posts from '../components/Posts.container';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch({ type: actions.REQUEST_POSTS })
    }

    render() {
        const { posts, history } = this.props;
        const style = {
            buttonContainer: {
                position: 'absolute',
                bottom: '20px',
                right: '20px',
            },
            button: {
                marginRight: 20,
            }
        };
        return (
            <div>
                <Posts posts={posts} />
                <div style={style.buttonContainer}>
                    <FloatingActionButton style={style.button} onClick={() => history.push('/add')}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

export default Home;