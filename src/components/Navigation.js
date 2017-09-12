import React from 'react';
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { toggleNavigation } from 'ducks/navigation'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { Link, withRouter } from 'react-router-dom'

const Navigation = (props) => (
  <Drawer open={props.open}>
    <AppBar
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      onLeftIconButtonTouchTap={props.toggleNavigation}
      title="Menu"
    />

    <MenuItem containerElement={<Link to="/" />}>Home</MenuItem>
    <MenuItem containerElement={<Link to="/weeks" />}>LaLista</MenuItem>
    <MenuItem containerElement={<Link to="/users" />}>Giocatori</MenuItem>
    <MenuItem containerElement={<Link to="/words" />}>Parole</MenuItem>
    <MenuItem containerElement={<Link to="/points" />}>Storico</MenuItem>
  </Drawer>
)

const ConnectedNavigation = connect((state) => (
  {open: state.ui.navigation.open}
), {
  toggleNavigation
})(Navigation)

export default withRouter(ConnectedNavigation)