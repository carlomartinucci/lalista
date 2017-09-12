// widgets.js

export const defaultState = {
  "Agganciare": {value: "Agganciare"},
  "Bene": {value: "Bene"},
  "Buon": {value: "Buon"},
  "Ricordo": {value: "Ricordo"},
  "Carlo": {value: "Carlo"},
  "Figata": {value: "Figata"},
  "Vedere": {value: "Vedere"},
  "Paste": {value: "Paste"},
  "Rifare": {value: "Rifare"},
  "Davvero": {value: "Davvero"},
  "Cazzo": {value: "Cazzo"},
  "Tipo": {value: "Tipo"},
  "Quindi": {value: "Quindi"}
}


// Actions
export const CHANGE_WORD = 'lalista/CHANGE_WORD';

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CHANGE_WORD: return changeReducer(state, action)
    default: return state;
  }
}

const changeReducer = (state, action) => {
  const {newWord} = action.payload;
  if (state[newWord]) {
    return state
  } else {
    return {...state, [newWord]: {value: newWord}}
  }
} 

// Action Creators
export function change({oldWord, newWord, weekId}) {
  return { type: CHANGE_WORD, payload: {oldWord, newWord, weekId} };
}
