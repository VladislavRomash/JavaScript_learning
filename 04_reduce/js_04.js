const todolistID_1 = '23h-14hj'
const todolistID_2 = '63d-58xb'

const todolist = [
    {id: todolistID_1, title: 'What to learn', filter: 'all'},
    {id: todolistID_2, title: 'What to buy', filter: 'completed'},
]

const task = {
    [todolistID_1]: [
        {id: 1, title: 'HTML', isDone: 'active'},
        {id: 2, title: 'CSS', isDone: 'completed'},
        {id: 3, title: 'JS', isDone: 'active'},
    ],
    [todolistID_2]: [
        {id: 1, title: 'Bread', isDone: 'completed'},
        {id: 2, title: 'Cheese', isDone: 'completed'},
        {id: 3, title: 'Fish', isDone: 'active'},
    ],
}

// ___________________________reduce___________________________


const arr = [2, 4, 6, 8, 10]

// console.log(arr.reduce((acc, el) => acc + el, 0))

// console.log(arr.reduce((acc, el) => acc > el ? acc : el))

// 2 > 4 => false (4)
// 4 > 6 => false (6)
// 6 > 8 => false (8)
// 8 > 10 => false (10)
// acc = 10 => 10

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

const data = users.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

// console.log(data)

const getNames = users.reduce((acc, el) => {
    let copy = {...el}
    acc.push(copy.name)
    return acc
}, [])

// console.log(names)

const map = users.reduce((acc, el) => {
    let copy = {...el}
    copy.scores = el.scores + 20
    acc.push(copy)
    return acc
}, [])

// console.log(map)

const filter = users.reduce((acc, el) => {
    let copy = {...el}
    if (el.age < 21) {
        acc.push(copy)
    }
    return acc
}, [])

// console.log(filter)
