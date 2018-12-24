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

database.ref().on('value', snapshot => {
    const val = snapshot.val()
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
}, e => console.log('error: ', e))

// setTimeout(() => database.ref().update({ age: 28 }), 3500)
// setTimeout(() => database.ref().off(onValueChange), 7000)
// setTimeout(() => database.ref().update({ d: true }), 10500)

// database.ref().set({
//     name: 'Josh Wood',
//     age: 26,
//     stressLevel: 1,
//     isSingle: false,
//     job: {
//         company: 'Capital One',
//         title: 'Junior Software Developer',
//     },
//     location: {
//         city: 'Tysons Corner',
//         country: 'United States'
//     }
// })
// .then(() => console.log('data is saved!!!'))
// .catch(error => console.log('there was an error: ' + error))

// Same as removing
// database.ref('isSingle').set(null) 

// database.ref('ds').remove()
//     .then(() => console.log('isSingle was removed'))
//     .catch(e => console.log('there was an error: ', e))

// Updating values
// database.ref().update({
//     name: 'Joshua Wood',
//     isSingle: null,
//     jobTitle: 'Senior Software Developer',
//     'location/city': 'LA'
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// READING DATA
// database.ref().once('value')
//     .then(snapshot => {
//         const val = val
//         console.log(val.age)
//     })
//     .catch(e => console.log("error", e))