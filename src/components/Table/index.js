import React from 'react';
import { connect } from 'react-redux'

import {
  Table as TableMui,
  TableBody,
  TableHeader,
  TableRow,
  TableFooter,
} from 'material-ui/Table';

import { usersSelector, wordsSelector } from 'selectors/'

import { map } from 'lodash'

import ThTd from 'components/Table/ThTd'
import TrTd from 'components/Table/TrTd'
import TfTd from 'components/Table/TfTd'


const extend = (hash) => Object.assign({HEAD: {name: "HEAD"}}, hash, {TAIL: {name: "TAIL"}})

const handleClick = () => console.log("click");

const Table = (props) =>(
  <TableMui onCellClick={handleClick} >
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        {map(extend(props.users), (user) => <ThTd key={user.name} name={user.name}/>)}
      </TableRow>
    </TableHeader>
    <TableBody showRowHover displayRowCheckbox={false}>
        {map(props.words, (word) => (
          <TableRow selectable={false} key={word.value}>
            {map(extend(props.users), (user) => <TrTd key={user.name} userName={user.name} wordValue={word.value} /> )}
          </TableRow>
        ))}
    </TableBody>
    <TableFooter adjustForCheckbox={false} >
      <TableRow>
        {map(extend(props.users), (user) => <TfTd key={user.name} name={user.name} />)}
      </TableRow>
    </TableFooter>
  </TableMui>
);

export default connect((state) => ({
  users: usersSelector(state),
  words: wordsSelector(state),
}))(Table);