// widgets.js
import { MARK_REQUEST } from 'ducks/score/points'

// Actions
const CLOSE = 'lalista/modal/CLOSE';
const OPEN = 'lalista/modal/OPEN';

const defaultState = {userName: null, wordValue: null, weekId: null, open: false}

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CLOSE: return defaultState
    case MARK_REQUEST: return defaultState
    case OPEN: return {...action.payload, open: true}
    default: return state;
  }
}

// Action Creators
export const close = () => (
  { type: CLOSE }
)

export const open = (userName, wordValue, weekId) => (
  { type: OPEN, payload: {userName, wordValue, weekId} }
)
