import { createSelector } from 'reselect'
import { filter, map, groupBy } from 'lodash'
import getWeekNumber from 'utils/getWeekNumber.js'

// import { reducer } from 'store.js'
// const exampleState = reducer({}, {})

export const usersSelector = (state) => state.users
export const pointsSelector = (state) => state.score.points
const weeksSelector = (state) => state.weeks
export const wordsSelector = (state) => state.words
export const modalSelector = (state) => state.ui.modal

export const getCurrentWeekId = () => getWeekNumber(new Date())

const getCurrentPointIds = createSelector(
  [weeksSelector, getCurrentWeekId],
  (weeks, currentWeekId) => weeks[currentWeekId].pointIds
)

const getCurrentPoints = createSelector(
  [pointsSelector, getCurrentPointIds],
  (points, pointIds) => Object.assign({}, ...pointIds.map((pointId) => ({[pointId]: points[pointId]})))
)

export const getCurrentPointsGroupedByUserNames = createSelector(
  [usersSelector, getCurrentPoints],
  (users, points) => (
    Object.assign({}, ...map(users, (user) => (
      {[user.name]: filter(points, {userName: user.name})}
    )))
  )
)

// const getCurrentScoreGroupedByUserNames = createSelector(
//   getCurrentPointsGroupedByUserNames,
//   (currentPointsGroupedByUserNames) => (
//     Object.assign({}, ...map(currentPointsGroupedByUserNames, (points, userName) => (
//       {[userName]: points.length}
//     )))
//   )
// )

const getPointsByWeekUserWord = createSelector(
  [pointsSelector],
  (points) => (groupBy(points, (point) => ([point.weekId, point.userName, point.wordValue])))
)

export const getScoreByWeekUserWord = createSelector(
  [getPointsByWeekUserWord],
  (points) => groupToLength(points)
)

const getPointsByWeekUser = createSelector(
  [pointsSelector],
  (points) => (groupBy(points, (point) => ([point.weekId, point.userName])))
)

export const getScoreByWeekUser = createSelector(
  [getPointsByWeekUser],
  (points) => groupToLength(points)
)

const getPointsByWeekWord = createSelector(
  [pointsSelector],
  (points) => (groupBy(points, (point) => ([point.weekId, point.wordValue])))
)

export const getScoreByWeekWord = createSelector(
  [getPointsByWeekWord],
  (points) => groupToLength(points)
)

const groupToLength = (group) => (
  Object.assign({}, ...map(group, (values, key) => (
    {[key]: values.length}
  )))
)
