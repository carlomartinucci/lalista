import React from 'react';
import { connect } from 'react-redux'

import {TableRowColumn} from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'

import { getScoreByWeekUserWord, getScoreByWeekWord, getCurrentWeekId } from 'selectors/'
import {open as openModal} from 'ducks/modal'

import keyComposer from 'utils/keyComposer'

const TrTd = ({userName, wordValue, currentWeekId, openModal, scoreByWeekUserWord, scoreByWeekWord}) => {
  switch (userName) {
    case "HEAD": return(
      <TableRowColumn key={"HEAD"}>{wordValue}</TableRowColumn>
    )
    case "TAIL": return(
      <TableRowColumn key={"TAIL"}>
        <FlatButton primary fullWidth label={
          (scoreByWeekWord[keyComposer(currentWeekId, wordValue)] || '.').toString()
        } />
      </TableRowColumn>
    )
    default: return(
      <TableRowColumn key={userName}>
        <FlatButton primary fullWidth onClick={() => openModal(userName, wordValue, currentWeekId)} label={
          (scoreByWeekUserWord[keyComposer(currentWeekId, userName, wordValue)] || '.').toString()
        } />
      </TableRowColumn>
    )
  }
}


const mapStateToProps = (state) => ({
  scoreByWeekUserWord: getScoreByWeekUserWord(state),
  scoreByWeekWord: getScoreByWeekWord(state),
  currentWeekId: getCurrentWeekId()
})

const mapDispatchToProps = (dispatch) => {
  return { openModal: (userName, wordValue, weekId) => dispatch(openModal(userName, wordValue, weekId)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(TrTd)
