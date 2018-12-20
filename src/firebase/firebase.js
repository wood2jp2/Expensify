// There's no default export from firebase so we import all and toss onto a new variable
import * as firebase from 'firebase'

const dbConfig = {
    apiKey: "AIzaSyBAVkdLcu0huVLwhYZVMF8CiYXOhSoxmpQ",
    authDomain: "expensifydb-d391e.firebaseapp.com",
    databaseURL: "https://expensifydb-d391e.firebaseio.com",
    projectId: "expensifydb-d391e",
    storageBucket: "expensifydb-d391e.appspot.com",
    messagingSenderId: "205630891975"
}

firebase.initializeApp(dbConfig)
const database = firebase.database()

database.ref().set({
    name: 'Josh Wood',
    age: 26,
    isSingle: false,
    location: {
        city: 'Falls Church',
        country: 'United States'
    }
})

database.ref('age').set(27)
database.ref('location/city').set('Arlington')

database.ref('attributes').set({
    height: 71,
    weight: 171
})

console.log('firebase running') 