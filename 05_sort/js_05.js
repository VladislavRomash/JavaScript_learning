// // __________sort -> without params__________
//
// const arr = ['Ann', 'Nick', 'Oleg', 'Bob']
// arr.sort()
// console.log(arr)
//
// const arrAlt = ['Ann', 'Nick', 'Oleg', 'Bob', 'max', 'evgeniy', 100, 'Юра', 'игорь']
// arrAlt.sort()
// console.log(arrAlt)
// console.log(arrAlt === arrAlt.sort()) // true
// // возвращает ссылку на исходный массив
//
// const sortedArr = arrAlt.toSorted()
// console.log(sortedArr)
// console.log(sortedArr === sortedArr.toSorted()) // false
// // возвращает ссылку на новый массив
//
// const nums = [777, 9, 100, 2000]
// console.log(nums.sort()) // [100, 2000, 777, 9]
//
// // __________sort -> with params__________
//
// const compareFn = (a, b) => b - a // убывание
// // n > 0 -> переставить
// // n < 0 -> не переставлять
//
// console.log(nums.sort(compareFn)) // [2000, 777, 100, 9]
//
// console.log(nums.sort(compareFn).reverse()) // [9, 100, 777, 2000]
// // Вместе с методом sort() часто используется метод reverse()

// ____________________

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         age: 21,
//         isMarried: true,
//         scores: 89,
//     },
//     {
//         id: 3,
//         name: 'Nick',
//         age: 20,
//         isMarried: false,
//         scores: 120,
//     },
//     {
//         id: 4,
//         name: 'John',
//         age: 19,
//         isMarried: false,
//         scores: 100,
//     },
//     {
//         id: 5,
//         name: 'alex',
//         age: 18,
//         isMarried: true,
//         scores: 105,
//     },
// ]
//
// const sortedAge = [...users].sort((a, b) => a.age - b.age)
// console.log(sortedAge)
//
// const sortedName = [...users].sort((a, b) => a.name.localeCompare(b.name))
// console.log(sortedName)

// _____________________________________________________Bubble sort_____________________________________________________

// const arrNums = [34, 12, 87, 22, 8, 19, 43]
// let count = 0
//
// // for (let i = 0; i < arrNums.length; i++) {
// //     count++
// //     if (arrNums[i] > arrNums[i + 1]) {
// //         const temp = arrNums[i]
// //         arrNums[i] = arrNums[i + 1]
// //         arrNums[i + 1] = temp
// //     }
// // }
// // console.log(count) // 7
// // console.log(arrNums) // [12, 34, 22, 8, 19, 43, 87]
//
// // ____________________
//
// // for (let i = 0; i < arrNums.length - 1; i++) {
// //     count++
// //     if (arrNums[i] > arrNums[i + 1]) {
// //         const temp = arrNums[i]
// //         arrNums[i] = arrNums[i + 1]
// //         arrNums[i + 1] = temp
// //     }
// // }
// // console.log(count) // 6
// // console.log(arrNums) // [12, 34, 22, 8, 19, 43, 87]
//
// // ____________________
//
// // for (let j = 0; j < arrNums.length; j++) {
// //     for (let i = 0; i < arrNums.length; i++) {
// //         count++
// //         if (arrNums[i] > arrNums[i + 1]) {
// //             const temp = arrNums[i]
// //             arrNums[i] = arrNums[i + 1]
// //             arrNums[i + 1] = temp
// //         }
// //     }
// // }
// // console.log(count) // 49
// // console.log(arrNums) // [8, 12, 19, 22, 34, 43, 87]
//
// // ____________________
//
// // for (let j = 0; j < arrNums.length - 1; j++) {
// //     for (let i = 0; i < arrNums.length - 1; i++) {
// //         count++
// //         if (arrNums[i] > arrNums[i + 1]) {
// //             const temp = arrNums[i]
// //             arrNums[i] = arrNums[i + 1]
// //             arrNums[i + 1] = temp
// //         }
// //     }
// // }
// // console.log(count) // 36
// // console.log(arrNums) // [8, 12, 19, 22, 34, 43, 87]
//
// // ____________________
//
// // for (let j = 0; j < arrNums.length - 1; j++) {
// //     for (let i = 0; i < arrNums.length - 1 - j; i++) {
// //         count++
// //         if (arrNums[i] > arrNums[i + 1]) {
// //             const temp = arrNums[i]
// //             arrNums[i] = arrNums[i + 1]
// //             arrNums[i + 1] = temp
// //         }
// //     }
// // }
// // console.log(count) // 21
// // console.log(arrNums) // [8, 12, 19, 22, 34, 43, 87]
//
// // ____________________
//
// // for (let j = 0; j < arrNums.length - 1; j++) {
// //     let isSorted = true
// //     for (let i = 0; i < arrNums.length - 1 - j; i++) {
// //         count++
// //         if (arrNums[i] > arrNums[i + 1]) {
// //             isSorted = false
// //             const temp = arrNums[i]
// //             arrNums[i] = arrNums[i + 1]
// //             arrNums[i + 1] = temp
// //         }
// //     }
// //     if (isSorted) break
// // }
// // console.log(count) // 20
// // console.log(arrNums) // [8, 12, 19, 22, 34, 43, 87]
//
// // ____________________
//
// for (let j = 0; j < arrNums.length - 1; j++) {
//     let isSorted = true
//     for (let i = 0; i < arrNums.length - 1 - j; i++) {
//         count++
//         if (arrNums[i] > arrNums[i + 1]) {
//             isSorted = false;
//             [arrNums[i], arrNums[i + 1]] = [arrNums[i + 1], arrNums[i]]
//         }
//     }
//     if (isSorted) break
// }
// console.log(count) // 20
// console.log(arrNums) // [8, 12, 19, 22, 34, 43, 87]