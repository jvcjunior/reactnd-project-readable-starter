import React from 'react';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import * as actions from '../actions';

class Comments extends React.Component {
    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch(actions.requestPostComments(match.params.post_id))
    }

    render() {
        const { comments } = this.props;
        return (
            <div>
            <Subheader>Comments</Subheader>
            { comments && comments.map((comment) => {
                return (
                    <Card key={comment.id}>
                        <CardHeader
                            subtitle={comment.author}
                        />
                        <CardText>
                            <div>{comment.body}</div>
                            <div>Score: {comment.voteScore}</div>
                        </CardText>
                        <CardActions>
                            <FlatButton
                                icon={<FontIcon className="material-icons">mood</FontIcon>} />
                            <FlatButton
                                icon={<FontIcon className="material-icons">mood_bad</FontIcon>} />
                            <FlatButton label="Edit" />
                            <FlatButton label="Delete" />
                        </CardActions>
                    </Card>
                );
            })}
            </div>
        );
    };
}

export default Comments;