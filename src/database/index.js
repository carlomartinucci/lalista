import firebase from 'firebase'
import config from 'database/config'

firebase.initializeApp(config);

const database = firebase.database();

export default database
