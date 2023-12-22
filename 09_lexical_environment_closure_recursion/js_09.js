// __________Lexical Environment (лексическое окружение)__________
//
// Lexical Environment (лексическое окружение) – структуру данных (объект),
// которая содержит переменные, функции и другие объекты,
// доступные в определенном контексте выполнения кода.
//
// _____________________________________________________________________________________________________________________
// const lE = {
//     environmentRecords: {}, // {}
//     linkToOutsideLE: 'outside_LE' // -->
// }
// LE => {} -->
//
// функции и блоки кода (if, while и т.д.)
// объект не формирует LE (он не созадет scope)
//
// _____________________________________________________________________________________________________________________
// globalLE => {} --> null
//
// let name; // globalLE = { name: undefined } --> null
// name = 'Alex' // globalLE = { name: 'Alex' } --> null
// console.log(name) // 'Alex'
// name = 'Hanna' // globalLE = { name: 'Hanna' } --> null
// console.log(name) // 'Hanna'
// console.log(age) // age is not defined // globalLE => {} --> null
//
// _____________________________________________________________________________________________________________________
// globalLE => { foo: Function } --> null
//
// foo() // foo
// function foo() {
//     console.log('foo')
// }
//
// bar() // Cannot access 'bar' before initialization // globalLE => { foo: Function, bar: Function } --> null
// const bar = () => {
//     console.log('bar')
// }
//
// _____________________________________________________________________________________________________________________
// globalLE => { foo: Function } --> null
//
// const foo = () => {
//     // При инициализации функции в ней создается переменная [[Environment]]
//     // которая ссылается на лексическое окружение, в которомом она была определена
//
//     // [[Environment]] --> globalLE // Environment - Link To Outside LE
//
//     // В момент вызова функции у нее формируется собственное лексическое окружение
//
//     // fooLE {} --> [[Environment]] // а, следовательно, [[Environment]] --> globalLE
//     // fooLE {} --> globalLE (для простоты)
//
//     let name; // fooLE { name: undefined } --> globalLE
//     name = 'Max' // fooLE { name: 'Max' } --> globalLE
//     name = 'Ann' // fooLE { name: 'Ann' } --> globalLE
//     console.log(name)
// }
// foo() // 'Ann'
//
// Как только функция выполнится, fooLE {} - удалится
//
// _____________________________________________________________________________________________________________________
// globalLE => { name: 'Alex', foo: Function } --> null
//
// const name = 'Alex'
//
// const foo = () => {
//     // [[Environment]] --> globalLE
//     // fooLE { greeting: 'Hello' } --> globalLE
//     const greeting = 'Hello'
//     console.log(`${greeting} ${name}`)
// }
//
// foo() // 'Hello Alex'
//
// _____________________________________________________________________________________________________________________
// globalLE => { name: 'Alex', foo: Function } --> null
//
// const name = 'Alex'
// const foo = () => {
//
//     // [[Environment]] --> globalLE
//     // fooLE { greeting: 'Hello', bar: Function } --> globalLE
//
//     const greeting = 'Hello'
//
//     const bar = (age) => {
//
//         // [[Environment]] --> fooLE
//         // barLE { age: 23 } --> fooLE
//
//         console.log(`${greeting} ${name} ${age}`)
//     }
//     bar(23)
// }
//
// foo() // 'Hello Alex 23'
//
// _____________________________________________________________________________________________________________________
// globalLE => { counter: Function } --> null
//
// const counterCreator = () => {
//
//     // [[Environment]] --> globalLE
//     // counterCreatorLE { count: 0 } --> globalLE
//
//     let count = 0
//
//     return () => {
//
//         // [[Environment]] --> counterCreatorLE
//         // {} --> counterCreatorLE
//
//         console.log(++count)
//     }
// }
//
// const counter = counterCreator()
//
// counter() // 1
// counter() // 2
// counter() // 3

// __________Closure__________
//
// Замыкание (closure) в JavaScript – это функция,
// которая запоминает свое лексическое окружение (состояние) во время создания
// и имеет доступ к переменным из этого окружения,
// даже если она вызывается вне своего лексического окружения.
//
// _____________________________________________________________________________________________________________________
// globalLE => { counter_1: Function, counter_2: Function } --> null
//
// const counterCreator = () => {
//
//     // [[Environment]]_1 --> globalLE
//     // [[Environment]]_2 --> globalLE
//
//     // counterCreatorLE_1 { count: 0 } --> globalLE
//     // counterCreatorLE_2 { count: 0 } --> globalLE
//
//     let count = 0
//
//     return () => {
//
//         // [[Environment]]_1 --> counterCreatorLE_1
//         // [[Environment]]_2 --> counterCreatorLE_2
//
//         // {}_1 --> counterCreatorLE_1
//         // {}_2 --> counterCreatorLE_2
//
//         console.log(++count)
//     }
// }
//
// const counter_1 = counterCreator()
// const counter_2 = counterCreator()
//
// counter_1() // 1
// counter_2() // 1
// counter_1() // 2
// counter_2() // 2
//
// _____________________________________________________________________________________________________________________
// globalLE => { a: true, name: 'Alex' } --> null
//
// const a = true
// let name = 'Alex'
//
// if (a) {
//     // blockLE {} --> globalLE
//     console.log(name) // 'Alex'
// }
// if (a) {
//     // blockLE { name: 'Hanna' } --> globalLE
//     let name = 'Hanna'
//     console.log(name) // 'Hanna'
// }

// __________Recursion__________
//
// Рекурсия (recursion) в JavaScript – это процесс,
// когда функция вызывает саму себя в теле своего исполнения.
//
// _____________________________________________________________________________________________________________________
//
// const foo = (x, n) => {
//     if (n === 1) return x
//     else return x * foo(x, n - 1)
// }
//
// console.log(foo(2, 3)) // 8
//
// _____________________________________________________________________________________________________________________
//
// _____Call Stack_____
//
// ___________________________________
// const foo = (2, 1) => {
//     if (1 === 1) return x // => 2
//     else return 2 * foo(x, n - 1)
// } => return 2
// ___________________________________
// const foo = (2, 2) => {
//     if (2 === 1) return x
//     else return 2 * foo(2, 2 - 1) // => 2 * 2 = 4
// } => return 4
// ___________________________________
// const foo = (2, 3) => {
//     if (3 === 1) return x
//     else return 2 * foo(2, 3 - 1) // 2 * 4 = 8
// } => return 8
// ___________________________________
//
// console.log(foo(2, 3)) => 8
//
// _____________________________________________________________________________________________________________________