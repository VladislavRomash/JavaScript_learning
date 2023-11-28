const users = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
]

// const copyUsers = [...users] // Поверхностная копия
// const copyUsers = users.map(m => m) // Поверхностная копия
// const copyUsers = users.map(m => ({...m})) // Глубокая копия


/*const car = {
    brand: 'BMW',
    startEngine() {
        console.log(`Start ${this.brand}`)
    }
}

car.startEngine() // Объект с методом*/


const test = {
    name: 'Vasya',
    married: true,
    age: 25,
    friends: {
        best: {
            id: 1,
            name: 'Lev'
        },
        bad: {
            id: 1,
            name: 'Nick'
        }
    },
    children: [
        {name: 'Mila', age: 1},
        {name: 'Petr', age: 10},
    ],
    company: {
        name: 'Hexlet'
    },
};

// const copyTest = {...test} // Поверхностная копия
// const copyTest = {...test, friends: {...test.friends, best: {...test.friends.best}}} // Глубокая копия
//
// copyTest.friends.best.name = 'Ann'
//
// console.log(test.friends.best.name) // 'Lev'
// console.log(copyTest.friends.best.name) // 'Ann'


// // in console of browser
//
// const copyTestBrowser = structuredClone(test)
//
// copyTestBrowser.friends.best.name = 'Ann'
//
// console.log(test.friends.best.name) // 'Lev'
// console.log(copyTestBrowser.friends.best.name) // 'Ann'
//
//
// // JSON - deep copy
//
// const deepCopy = JSON.parse(JSON.stringify(test));
// const deepCopy = JSON.parse(JSON.stringify(users));
//
// deepCopy.friends.best.name = 'Ann'
// deepCopy[0].name = 'Igor'
//
// console.log(test.friends.best.name) // 'Lev'
// console.log(deepCopy.friends.best.name) // 'Ann'
//
// console.log(users[0].name) // Bob
// console.log(deepCopy[0].name) // Igor



// delete test.friends.bad.name
// console.log(test)