import React from 'react';
import { connect } from 'react-redux'

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import { usersSelector, getScoreByWeekUser, getCurrentWeekId } from 'selectors/'

import { map } from 'lodash'
const keyComposer = (...args) => args.join(",")

const Ranks = (props) => (
  <Paper style={{margin: "20px"}}>
    <List>
      {map(props.users, (user) => (
        <ListItem
          key={user.name}
          primaryText={user.name}
          // leftAvatar={<Avatar src="images/ok-128.jpg" />}
          leftAvatar={<Avatar>{props.scoreByWeekUser[keyComposer(props.currentWeekId, user.name)]}</Avatar>}
          rightIcon={<ActionGrade />}
        />
      ))}
    </List>
  </Paper>
);

export default connect((state) => ({
  users: usersSelector(state),
  scoreByWeekUser: getScoreByWeekUser(state),
  currentWeekId: getCurrentWeekId()
}))(Ranks);
