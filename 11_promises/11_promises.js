// promise

// const fetch = (url, callback) => {
//     // .....
//
//     callback(error, data)
// }

// fetch('https://books.com/authors', (error, data) => {
//     if (error) {
//         return console.warn(error)
//     } else {
//         fetch('https://books.com/authors/17', (error, data) => {
//             if (error) {
//                 return console.warn(error)
//             } else {
//                 fetch('https://books.com/authors/17/books', (error, data) => {
//                     if (error) {
//                         return console.warn(error)
//                     } else {
//                         fetch('https://books.com/authors/17/books/8', (error, data) => {
//                             if (error) {
//                                 return console.warn(error)
//                             } else {
//                                 //...
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// fetch('https://books.com/authors')
//     .then(data => fetch('https://books.com/authors/17'))
//     .then(data => fetch('https://books.com/authors/17/books'))
//     .then(data => fetch('https://books.com/authors/17/books/8'))
//     .catch(error => console.log(error))


// function newPromise(callback) {
//     const resolve = (result) => {
//         return {
//             state: 'fulfilled',
//             result: result
//         }
//     }
//     const reject = (error) => {
//         return {
//             state: 'rejected',
//             result: error
//         }
//     }
//     callback(resolve, reject)
// }

// const server = {
//     getData(id) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (id === 0) reject('some error')
//                 else {
//                     resolve('some data')
//                 }
//             }, 1500)
//         })
//     }
// }

// server.getData(0)
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))
//     .finally(() => console.log('finally')) // 'finally'
//
// server.getData(1)
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))
//     .finally(() => console.log('finally')) // 'finally'

// server.getData(1)
//     .then(data => console.log(data), // 1 --> some data
//         error => console.log(error) // 0 --> some error
//     ) // bad practice with second function --> use method catch

// server.getData(1)
//     .then(data => {
//         console.log(data) // 'some data'
//         return 10
//     })
//     .finally((data) => {
//         console.log(data) // undefined
//         return 'Finally'
//     })
//     .then(data => {
//         console.log(data) // 10
//     })
//     .then(data => {
//         console.log(data) // undefined
//         throw new Error('ERROR')
//     })
//     .catch(error => {
//         console.log(error) // Error: ERROR
//         return Promise.resolve('result of a new promise')
//     })
//     .then(data => {
//         console.log(data) // result of a new promise
//         return server.getData(0)
//     })
//     .then(data => {
//         console.log('over catch', data)
//         return 'after error in promise'
//     }) // --> void, because Promise was rejected
//     .catch(error => console.log(error)) // some error
//     .then(data => console.log('below catch', data)) // below catch, undefined
//     .finally(() => console.log('End')) // End

// __________ Practice __________

// Напишите функцию delay(ms), которая возвращает промис,
// переходящий в состояние "resolved" через ms (миллисекунд).

// Пример использования:
// delay (1000).then (() => alert("Hello!"))

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
// delay(1000).then(() => alert("Hello!"))

const server = {
    getData() {
        return new Promise((resolve, reject) => {
            reject('reject')
        }, 1500)
    }
}

// Что будет выведено в консоль
server.getData()
    .then(data => data + 'then1') // no
    .catch(data => data + 'catch1') // yes
    .catch(data => data + 'catch2') // no
    .then(data => data + 'then2') // yes
    .finally(data => data + 'finally') // no
    .then(data => console.log(data)) // rejectcatch1then2