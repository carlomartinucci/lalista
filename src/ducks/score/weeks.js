// "2017_35": {
//   byUserName: {
//     current: {
//       "Carlo": 12,
//       ...
//     },
//     past: {
//       "Carlo": 32,
//       ...
//     }
//   },
//   byWordValue: {
//     "Davvero": 1,
//     ...
//   }
// }

// import database from 'database/'
// widgets.js

// Actions

export const defaultState = {
  "2017_36": {
    "byUserName": {
      "current": {},
      "past": {
        "Chiara": 0,
        "Giacomo": 0,
        "Antonio": 29,
        "Carlo": 36,
        "Marco": 6,
        "Valentino": 4,
        "Alberto": 64,
        "Daniel": 39,
        "Pier": 55,
        "Enrico": 41,
        "Surpidiuqido": 26,
        "Filippo": 37,
        "Arianna": 4,
        "Giulia": 0,
        "Marius": 0
      }
    }
  }
}


// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}

// Action Creators
