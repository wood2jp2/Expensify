// const person = {
//     name: 'Josh',
//     age: 26,
//     location: {
//         city: 'Arlington',
//         temp: 33
//     }
// }

// // setting a variable default if it doesn't exist syntax.
// const {name = 'Anon', age} = person

// console.log(`Hi, my name is ${name} and I am ${age} years old`)

// // renaming the object property within destructuring syntax.
// const {city, temp: temperature } = person.location

// console.log(`I am from ${city} and it is ${temperature} degrees here`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)

// ARRAY DESTRUCTURING

const address = ['123 Fake Street', 'Alexandria', 'VA', '22153']

// you can leave the last ones off if not needed.
// You can remove the name and leave the comma if you don't need any number of first ones
// Note, that there is nothing to rename, but you can still set defaults.
const [, city, state = 'New York'] = address

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , priceMedium] = item

console.log(`A medium ${coffee} costs ${priceMedium}`)