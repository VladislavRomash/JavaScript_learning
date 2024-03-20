// Priority:
// 1. Call Stack
// -->
// 2. Callback Queue:
//
// Priority:
// 1. Microtasks
// -->
// 2. Render Queue (перед выполнением тасок, регистрируется количество текущих задач.
//                  Если в эту очередь поступят новые задачи, то они выполнятся не будут до тех пор,
//                  пока не выполнятся зарегистрированные таски и хотя бы одна задача из Macrotasks, если она там имееется)
// -->
// 3. Macrotasks

// console.log(1)
// setTimeout(function () {
//     console.log('timeout')
// }, 1000)
// console.log(2)
// console.log(3)
// // 1 2 3 timeout

// console.log(1)
// setTimeout(function () {
//     console.log('timeout')
// })
// console.log(2)
// console.log(3)
// // 1 2 3 timeout

// console.log(1)
// setTimeout(function () {
//     console.log('timeout_1')
// }, 3000)
// setTimeout(function () {
//     console.log('timeout_2')
// }, 1000)
// console.log(2)
// console.log(3)
// // 1 2 3 timeout_2 timeout_1

// setTimeout(function a() {
//     console.log('timeout')
// }, 0);
//
// Promise.resolve().then(function b() {
//     console.log('promise')
// });
// // promise timeout

// function a() {
//     console.log('a')
// }
//
// function b() {
//     console.log('b')
// }
//
// function c() {
//     console.log('c')
// }
//
// a()
// new Promise(() => {
//     console.log('create_promise')
//     setTimeout(() => {
//         console.log('timeout')
//     }, 5000)
// })
// b()
// c()
// // a create_promise b с timeout

// setTimeout(() => console.log('1'))
// setTimeout(() => console.log('2'), 1000)
// new Promise((resolve) => {
//     console.log('3')
//     resolve()
//     console.log('4')
// })
//     .then(() => console.log('5'))
//
// console.log('6')
//
// async function foo1() {
//     console.log('7')
//     await foo2()
//     console.log('8')
// }
//
// async function foo2() {
//     console.log('9')
// }
//
// foo1()
// console.log('10')
// // 3 4 6 7 9 10 5 8 1 2

// const myPromise = (delay) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay)
//     })
// }
// setTimeout(() => {
//     console.log('1')
// }, 1000)
// myPromise(1000)
//     .then(() => console.log('2'));
// setTimeout(() => {
//     console.log('3')
// }, 100)
// myPromise(2000)
//     .then(() => console.log('4'))
//
// // 3 1 2 4

// console.log('1')
// setTimeout(() => {
//     console.log('2')
//     Promise.resolve()
//         .then(() => console.log('3'))
// })
//
// new Promise((resolve) => {
//     console.log('4')
//     resolve('5')
// })
//     .then((data) => console.log(data))
//
// Promise.resolve()
//     .then(() => console.log('6'))
//     .then(() => {
//         console.log('7')
//         setTimeout(() => console.log('8'))
//     })
//
// setTimeout(() => console.log('9'))
// console.log('10')
//
// // 1 4 10 5 6 7 2 3 9 8

// setTimeout(function timeout() {
//     console.log('1');
// }, 0);
// let p = new Promise(function (resolve, reject) {
//     console.log('2');
//     resolve();
// });
// p.then(function () {
//     console.log('3');
// });
// console.log('4');
//
// // 2 4 3 1

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);
//
// // 1 7 3 5 2 6 4

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.reject(3).catch(console.log);
// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));
// Promise.resolve(5).then(console.log);
// console.log(6);
// setTimeout(() => console.log(7), 0);
//
// // 1 6 3 5 2 4 7

// const myPromise = (delay) => new Promise((res, rej) => {
//     setTimeout(res, delay)
// })
// setTimeout(() => console.log('1'), 1000);
// myPromise(1000).then(res => console.log('2'));
// setTimeout(() => console.log('3'), 100);
// myPromise(2000).then(res => console.log('4'));
// setTimeout(() => console.log('5'), 2000);
// myPromise(1000).then(res => console.log('6'));
// setTimeout(() => console.log('7'), 1000);
// myPromise(5000).then(res => console.log('8'));
//
// // 3 1 2 6 7 4 5 8