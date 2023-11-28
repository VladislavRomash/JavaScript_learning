const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
]

// _____________________________________________________________________________________________________________________

const getNames = (arr) => {
    const newArr = []
    const get = el => el.name
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = get(arr[i])
    }
    return newArr
}
// console.log(getNames((students)))

const getScores = (arr) => {
    const newArr = []
    const foo = el => el.scores
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = foo(arr[i])
    }
    return newArr
}
// console.log(getScores(students))

const addScores = (arr) => {
    const newArr = []
    const foo = el => ({...el, scores: el.scores + 10})
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = foo(arr[i])
    }
    return newArr
}
// console.log(addScores(students))
// __________________________________________MAP (Cycle)________________________________________________________________

const getMappedArr = (arr, foo) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = foo(arr[i])
    }
    return newArr
}
// console.log(getMappedArr(students, el => el.name))
// console.log(getMappedArr(students, el => el.scores))
// console.log(getMappedArr(students, el => ({...el, scores: el.scores + 10})))

// _______________________________________MAP___________________________________________________________________________

// console.log(students.map(m => m.name))
// console.log(students.map(m => m.scores))
// console.log(students.map(m => ({...m, scores: m.scores + 10})))

// _______________________________________FILTER (Cycle)________________________________________________________________

const getFilteredArr = (arr, foo) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (foo(arr[i])) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr
}
// console.log(getFilteredArr(students, el => el.age >= 21))
// console.log(getFilteredArr(students, el => el.scores > 90))
// console.log(getFilteredArr(students, el => el.isMarried))

// _______________________________________FILTER________________________________________________________________________

// console.log(students.filter(f => f.age >= 21))
// console.log(students.filter(f => f.scores > 90))
// console.log(students.filter(f => f.isMarried))

// ______________________________________find, push, indexOf, includes__________________________________________________

const find = (arr, foo, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (foo(arr[i])) return arr[i]
    }
}
// console.log(find(students, el => el.age > 20))
// console.log(find(students, el => el.age > 20, 1))
// console.log(find(students, el => !el.isMarried))

const func = (name, age, isMarried, scores) => {
    return {name, age, isMarried, scores}
}

const push = (arr, foo) => {
    arr[arr.length] = foo
    return arr.length
}
// console.log(push(students, func('Igor', 49, false, 168)))
// console.log(students.length)

const array = [28, 5, 9, 15, 1, 23, 5];

const indexOf = (arr, searchElement, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === searchElement) return i;
    }
    return -1
}
// console.log(indexOf(array, 4))
// console.log(indexOf(array, 5))
// console.log(indexOf(array, 5, 2))

const includes = (arr, searchElement, index = 0) => {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === searchElement) return true;
    }
    return false
}
// console.log(includes(array, 1))
// console.log(includes(array, 4))
// console.log(includes(array, 5, 2))

// ________________________________________ ___proto___ / prototype_____________________________________________________

function getLength() {
    return `Length of array - ${this.length}`
}

Array.prototype.getLength = getLength

console.log([].getLength())
console.log([1, 2, 3, 4, 5].getLength())
console.log(students.getLength())
