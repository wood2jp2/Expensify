import { resolve } from "url";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data has been resolved')
        reject('something went wrong')
    }, 1500)
})

console.log('before')

promise.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

console.log('after')