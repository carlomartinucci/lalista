import { createStore, combineReducers } from 'redux'
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

import navigation from 'ducks/navigation'
import modal from 'ducks/modal'
import scorePoints from 'ducks/score/points'
import scoreWeeks from 'ducks/score/weeks'
import words from 'ducks/words'
import users from 'ducks/users'
import weeks from 'ducks/weeks'

const ui = combineReducers({navigation, modal})
const score = combineReducers({points: scorePoints, weeks: scoreWeeks})

export const reducer = combineReducers({users, words, score, weeks, ui})

const config = {
  ...offlineConfig,
  effect: (effect, action) => {
    console.log(`Executing effect for ${action.type}`)
    return effect()
  }
}

const store = createStore(
  reducer,
  offline(config)
)

export default store
