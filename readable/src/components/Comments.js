import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import * as actions from '../actions';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch(actions.requestPostComments(match.params.post_id))
    }

    render() {
        const { comments } = this.props;
        return (
            <div>
                <List>
                    <Subheader>Comments</Subheader>
                    {comments && comments.map((comment) => {
                        return (
                            <div>
                                <ListItem
                                    rightIconButton={rightIconMenu}
                                    primaryText={comment.author}
                                    secondaryText={
                                    <p>
                                        {comment.body}
                                    </p>
                                    }
                                    secondaryTextLines={2}
                                />
                                <Divider inset={true} />
                            </div>
                        );
                    })}
                </List>
            </div>
        );
    };
}

export default Comments;
