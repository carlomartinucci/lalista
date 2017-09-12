import React from 'react';
import { connect } from 'react-redux'

import {TableRowColumn} from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'

import { getScoreByWeekUser, getCurrentWeekId } from 'selectors/'

import keyComposer from 'utils/keyComposer'


const TfTd = (props) => {
  switch (props.name) {
    case "HEAD": return <TableRowColumn key={"HEAD"}></TableRowColumn>
    case "TAIL": return <TableRowColumn key={"TAIL"}></TableRowColumn>
    default: return(
      <TableRowColumn key={props.name}>
        <FlatButton onClick={(e) => console.log(e)} secondary fullWidth label={
          (props.scoreByWeekUser[keyComposer(props.currentWeekId, props.name)] || '.').toString()
        } />
      </TableRowColumn>
    )
  }
}


const mapStateToProps = (state) => ({
  scoreByWeekUser: getScoreByWeekUser(state),
  currentWeekId: getCurrentWeekId()
})

export default connect(mapStateToProps)(TfTd)
