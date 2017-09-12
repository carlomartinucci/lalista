import React from 'react';
import {TableHeaderColumn} from 'material-ui/Table'

const ThTd = (props) => {
  switch (props.name) {
    case "HEAD": return(
      <TableHeaderColumn key={props.name}></TableHeaderColumn>
    )
    case "TAIL": return(
      <TableHeaderColumn key={props.name}>tot</TableHeaderColumn>
    )
    default: return(
      <TableHeaderColumn key={props.name}>{props.name}</TableHeaderColumn>
    )
  }
}

export default ThTd;