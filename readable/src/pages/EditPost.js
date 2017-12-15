import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class EditPost extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            message: '',
            open: false,
            post: {},
        }
    }

    componentDidMount(){
        const post = this.props.location.state.post;
        this.setState({ post , title: post.title, message: post.body});
    }

    changeTitle = e => {
        this.setState({ title: e.target.value });
    }

    changeMessage = e => {
        this.setState({ message: e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3001/posts/${this.state.post.id}`, {
            method: 'put',
            headers: {
                'Authorization' : 'token',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "body": this.state.message,
                "title": this.state.title,
            })
        }).then((post) => {
            this.setState({open: true});
        });
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleOk = () => {
        this.setState({open: false});
    };

    render() {
        const style = {
            margin: 12,
        };
        const { history } = this.props;

        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.handleOk}
            />,
        ];

        return (
        <div>
          <form>
            <TextField
                hintText="What's the Title?"
                floatingLabelText="Title"
                value={this.state.title}
                onChange={this.changeTitle}
            /><br />
            <TextField
                hintText="Write a post message"
                floatingLabelText="Message"
                value={this.state.message}
                onChange={this.changeMessage}
                multiLine={true}
                rows={2}
            /><br />
            <RaisedButton label="Save" onClick={this.handleSubmit} primary={true} style={style} />
            <RaisedButton label="Cancel" onClick={() => history.push('/')} secondary={true} style={style} />
          </form>
          <Dialog
            title="Message"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            Post updated with success
          </Dialog>
        </div>
        );
    }
}

export default EditPost;