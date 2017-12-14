import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const Post = ({post}) => {
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
                <FlatButton label="Edit" />
                <FlatButton label="Delete" />
            </CardActions>
        </Card>
    );
}

export default Post;
