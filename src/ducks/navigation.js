// widgets.js

// Actions
const TOGGLE = 'lalista/navigation/TOGGLE';

// Reducer
export default function reducer(state = {open: false}, action = {}) {
  switch (action.type) {
    case TOGGLE: return {open: !state.open}
    default: return state;
  }
}

// Action Creators
export function toggleNavigation() {
  return { type: TOGGLE };
}
