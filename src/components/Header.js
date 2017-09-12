import React from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { toggleNavigation } from 'ducks/navigation'
import { reconcile as reconcilePoints } from 'ducks/score/points'

const Header = (props) => (
  <AppBar
    onLeftIconButtonTouchTap={props.toggleNavigation}
    onRightIconButtonTouchTap={props.reconcilePoints}
    iconElementRight={<FlatButton label="Refresh" />}
    title="LaLista"
  />
);

const ConnectedHeader = connect(null, {toggleNavigation, reconcilePoints})(Header)

export default ConnectedHeader;