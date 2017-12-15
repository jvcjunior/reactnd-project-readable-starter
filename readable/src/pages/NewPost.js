import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class NewPost extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            author: '',
            category: '',
            message: '',
            open: false
        }
    }

    changeTitle = e => {
        this.setState({ title: e.target.value });
    }

    changeAuthor = e => {
        this.setState({ author: e.target.value });
    }

    changeCategory = (event, index, value) => {
        this.setState({ category: value });
    }

    changeMessage = e => {
        this.setState({ message: e.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/posts', {
            method: 'post',
            headers: {
                'Authorization' : 'token',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": Date.now(),
                "timestamp": Date.now(),
                "body": this.state.message,
                "title": this.state.title,
                "author": this.state.author,
                "category": this.state.category,
            })
        }).then((post) => {
            this.setState({open: true});
        });
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleOk = () => {
        this.props.history.push('/');
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
                onChange={this.changeTitle}
            /><br />
            <TextField
                hintText="Who's the author?"
                floatingLabelText="Author"
                onChange={this.changeAuthor}
            /><br />
            <SelectField
                floatingLabelText="Category"
                value={this.state.category}
                onChange={this.changeCategory}
            >
                <MenuItem value="react" primaryText="React" />
                <MenuItem value="redux" primaryText="Redux" />
                <MenuItem value="udacity" primaryText="Udacity" />
            </SelectField>
            <br />
            <TextField
                hintText="Write a post message"
                floatingLabelText="Message"
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
            Post created with success
          </Dialog>
        </div>
        );
    }
}

export default NewPost;