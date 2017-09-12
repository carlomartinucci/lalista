import React from 'react';

import { connect } from 'react-redux'

import { usersSelector, wordsSelector } from 'selectors/'

import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

import { mark } from 'ducks/score/points'

import map from 'lodash/map'

class QuickMarker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      wordValue: '',
      weekId: "2017_36"
    }
    this.setName = this.setName.bind(this)
    this.setWord = this.setWord.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateWord = this.updateWord.bind(this)
  }

  filter(a,b,c) { return AutoComplete.caseInsensitiveFilter(a,b,c) || AutoComplete.fuzzyFilter(a,b,c) }

  updateName(name) {
    console.log("updateName", name)
    this.setState({userName: name})
  }

  updateWord(value) {
    console.log("updateWord", value)
    this.setState({wordValue: value})
  }

  setName(name) {
    console.log("setName", name)
    this.wordInput.focus();
  }

  setWord(value) {
    console.log("setWord", value)
    this.props.mark(this.state)
    this.setState({userName: '', wordValue: ''})
  }

  render() {
    return (
      <Paper style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px", padding: "10px"}}>
        <AutoComplete
          fullWidth
          ref={input => this.userInput = input}
          filter={this.filter}
          openOnFocus
          searchText={this.state.userName}
          onUpdateInput={this.updateName}
          onNewRequest={this.setName}
          floatingLabelText="Chi ha detto"
          dataSource={map(this.props.users, user => user.name)}
        />
        <AutoComplete
          fullWidth
          ref={input => this.wordInput = input}
          openOnFocus
          filter={this.filter}
          searchText={this.state.wordValue}
          onUpdateInput={this.updateWord}
          onNewRequest={this.setWord}
          floatingLabelText="che cosa"
          dataSource={map(this.props.words, word => word.value)}
        />
      </Paper>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    mark: ({userName, wordValue, weekId}) => {
      dispatch(mark({userName, wordValue, weekId}));
    }
  };
};


export default connect((state) => ({
  users: usersSelector(state),
  words: wordsSelector(state),
}), mapDispatchToProps)(QuickMarker);
