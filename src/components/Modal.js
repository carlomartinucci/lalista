import React from 'react';
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import { modalSelector } from 'selectors/'
import { mark } from 'ducks/score/points'
import { close } from 'ducks/modal'


const Modal = (props) => (
  <Dialog 
    title={`${props.modal.userName} ha detto ${props.modal.wordValue}?`}
    actions={[
      <FlatButton label="No, ho sbagliato" secondary onClick={props.close} />,
      <RaisedButton label="Sì, confermo" primary
        onClick={() => props.mark(...props.modal)}
      />
    ]}
    modal
    open={props.modal.open}
    onRequestClose={props.close}
  >
    Segno che {props.modal.userName} ha detto {props.modal.wordValue}?
  </Dialog>
)

const mapDispatchToProps = (dispatch, props) => {
  return {
    mark: ({userName, wordValue, weekId}) => {
      dispatch(mark({userName, wordValue, weekId}));
    },
    close: () => dispatch(close())
  };
};

export default connect((state) => ({
  modal: modalSelector(state),
}), mapDispatchToProps)(Modal);