// "11111": {
//   id: "11111",
//   userName: "Carlo",
//   wordValue: "Tipo",
//   weekId: "2017_36",
//   time: Date.now()
// }

import uuidv1 from 'uuid/v1'
import database from 'database/'
// widgets.js

// Actions
export const MARK_REQUEST = 'MARK_REQUEST';
export const MARK_COMMIT = 'MARK_COMMIT';
export const MARK_ROLLBACK = 'MARK_ROLLBACK';

export const RECONCILE_REQUEST = 'RECONCILE_REQUEST';
export const RECONCILE_COMMIT = 'RECONCILE_COMMIT';
export const RECONCILE_ROLLBACK = 'RECONCILE_ROLLBACK';

export const defaultState = {}


// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case MARK_REQUEST:
      const uuid = uuidv1()
      return {...state, [uuid]: {id: uuid, ...action.payload, time: Date.now()}}
    case RECONCILE_COMMIT:
      return action.payload.val()
    default: return state;
  }
}

// Action Creators
export const mark = ({userName, wordValue, weekId}) => (
  {
    type: MARK_REQUEST,
    payload: {userName, wordValue, weekId},
    meta: {
      offline: {
        effect: markEffect({userName, wordValue, weekId}),
        commit: {type: MARK_COMMIT},
        rollback: {type: MARK_ROLLBACK}
      }
    }
  }
)
export const reconcile = () => (
  {
    type: RECONCILE_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: reconcileEffect,
        commit: {type: RECONCILE_COMMIT},
        rollback: {type: RECONCILE_ROLLBACK}
      }
    }
  }
)



const markEffect = ({userName, wordValue, weekId}) => () => {
  const key = database.ref("points").push().key
  return database.ref(`points/${key}`).set({id: key, userName, wordValue, weekId, time: Date.now()})
} 

const reconcileEffect = () => {
  return database.ref("points").once("value")
}