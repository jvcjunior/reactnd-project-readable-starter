import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { withRouter } from 'react-router'

const Post = ({ post, match, history }) => {
    return (
        <Card key={post.id}>
            <CardHeader
                title={post.title}
                subtitle={post.author}
            />
            <CardText>
                <div>{post.body}</div>
                <div>Score: {post.voteScore}</div>
                <div>Comments: {post.commentCount}</div>
            </CardText>
            <CardActions>
                <FlatButton
                    icon={<FontIcon className="material-icons">mood</FontIcon>} />
                <FlatButton
                    icon={<FontIcon className="material-icons">mood_bad</FontIcon>} />
                <FlatButton label="Details" onClick={() => history.push(`/${post.category}/${post.id}`)}/>
                <FlatButton label="Edit" onClick={() => history.push({ pathname: '/edit', state: { post: post } })} />
                <FlatButton label="Delete" />
            </CardActions>
        </Card>
    );
}

export default withRouter(Post);
