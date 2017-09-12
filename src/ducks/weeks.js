import { CHANGE_WORD } from 'ducks/words'

import { defaultState as defaultWords } from 'ducks/words'
import { defaultState as defaultPoints } from 'ducks/score/points'
import { defaultState as defaultUsers } from 'ducks/users'


// widgets.js

export const defaultState = {
  "2017_36": {
    id: "2017_36",
    userNames: Object.keys(defaultUsers),
    wordValues: Object.keys(defaultWords),
    pointIds: Object.keys(defaultPoints)
  }
}

// Actions

// Reducer

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHANGE_WORD: return changeReducer(state, action)
    default: return state;
  }
}

const changeReducer = (state, action) => {
  const {oldWord, newWord, weekId} = action.payload;
  let weekState = state[weekId]
  if (!weekState) {
    const [year, week] = weekId.split("_")
    const lastWeekId = [year, parseInt(week, 10) - 1 ].join("_")
    weekState = state[lastWeekId]
  }
  const wordValues = weekState.wordValues.filter((word) => word === oldWord) + [newWord]
  weekState = {...weekState, wordValues}
  return {...state, [weekId]: weekState}
} 

// Action Creators
export function change({oldWord, newWord, weekId}) {
  return { type: CHANGE_WORD, payload: {oldWord, newWord, weekId} };
}
