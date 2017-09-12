const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.updateWeekCurrent = functions.database.ref('/points/{pointId}').onWrite(event => {
  const point = event.data.val();

  const {userName, weekId, wordValue} = point
  const userRef = event.data.ref.root.child(`/weeks/${weekId}/byUserName/current/${userName}`)
  console.log("userRef:", userRef)

  return userRef.transaction(current => {
    return (current || 0) + 1;
  }).then(() => {
    console.log('Counter updated.');
  });

});

exports.updateNextWeekPast = functions.database.ref('/weeks/{weekId}/byUserName/current').onWrite(event => {
  const current = event.data.val();
  const [year, week] = event.params.weekId.split("_")
  const nextWeekId = [year, parseInt(week) + 1 ].join("_")

  const userRef = event.data.ref.root.child(`/weeks/${nextWeekId}/byUserName/past`)
  console.log("userRef:", userRef)

  return userRef.transaction(past => {
    return current;
  }).then(() => {
    console.log('Past updated.');
  });

});

