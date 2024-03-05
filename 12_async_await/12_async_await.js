// import fetch from 'node-fetch'

// fetch('https://google.com/query=js')
//     .then((data) => {
//         console.log(data.url)
//     })
// fetch('https://bing.com/query=js')
//     .then((data) => {
//         console.log(data.url)
//     })
// fetch('https://yahoo.com/query=js')
//     .then((data) => {
//         console.log(data.url)
//     })

// fetch('https://google.com/query=js')
//     .then((data) => {
//         console.log(data.url) // 'https://google.com/query=js'
//         return fetch('https://bing.com/query=js')
//     })
//     .then((data) => {
//         console.log(data.url) // 'https://bing.com/query=js'
//         return fetch('https://yahoo.com/query=js')
//     })
//     .then((data) => {
//         console.log(data.url) // 'https://yahoo.com/query=js'
//     })
//     .catch(error => console.warn(error))


// const makeRequest = async () => {
//     try {
//         const dataFromGoogle = await fetch('https://google.com/query=js')
//         console.log(dataFromGoogle.url)
//         const dataFromBing = await fetch('https://bing.com/query=js')
//         console.log(dataFromBing.url)
//         const dataFromYahoo = await fetch('https://yahoo.com/query=js')
//         console.log(dataFromYahoo.url)
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// makeRequest()

// __________Methods of Promise__________

// all | race | any | allSettled

// // ALL
//
// const foo = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('foo'), 100)
// })
//
// Promise.all([Promise.resolve(3), 1337, foo])
//     .then((values) => {
//         console.log(values) // [3, 1337, 'foo']
//     })
//     .catch(error => console.warn(error))
//
// // возвращает промис,
// // который выполнится тогда,
// // когда будут выполнены все промисы,
// // переданные в виде перечисляемого аргумента,
// // или отклонено любое из переданных промисов.

// // RACE
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('one'), 500)
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'two')
// })
//
// Promise.race([promise1, promise2])
//     .then((value) => {
//         console.log(value)
//     })
//     .catch(error => console.warn(error)) // two
//
// // возвращает выполненный или отклонённый промис,
// // в зависимости от того,
// // с каким результатом завершится первый из переданных промисов,
// // со значением или причиной отклонения этого промиса.

// // ANY
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('one'), 500)
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'two')
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 'three')
// })
//
// Promise.any([promise1, promise2, promise3])
//     .then((value) => {
//         console.log(value) // three
//     })
//     .catch(error => console.warn(error))
//
// // Как только один из промисов (Promise) выполнится успешно (fulfill),
// // метод возвратит единственный объект Promise со значением выполненного промиса.
// // Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected)
// // тогда возвращённый объект Promise будет отклонён (rejected) с одним из значений

// // ALLSETTLED
//
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//     setTimeout(reject, 100, 'foo'),
// );
//
// Promise.allSettled([promise1, promise2])
//     .then((data) => {
//             console.log(data) // [{status: "fulfilled", value: 3}, {status: "rejected", reason: "foo"}]
//             data.forEach(f => console.log(f.status)) // "fulfilled" "rejected"
//         }
//     )
//
// // возвращает промис,
// // который исполняется когда все полученные промисы завершены (исполнены или отклонены),
// // содержащий массив результатов исполнения полученных промисов.