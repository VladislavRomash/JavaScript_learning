const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

// 1. Поверхностная копия student
const shallowCopy = [...students]
console.log(students === shallowCopy)
console.log(students[0] === shallowCopy[0])

// 2. Полная (глубокая) копия student
const deepCopyStudents = students.map(m => ({...m}))
console.log(deepCopyStudents === shallowCopy)
console.log(deepCopyStudents[0] === shallowCopy[0])

// 3. Поверхностная копия user
const shallowCopyUser = {...user}
console.log(user === shallowCopyUser)
console.log(user.friends === shallowCopyUser.friends)

// 4. Полная (глубокая) копия user
const deepCopyUser = {...user, friends: [...user.friends]}
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)
deepCopyUser.friends.push('Ann')
console.log(user.friends.length)
console.log(deepCopyUser.friends.length)

// __________Далее все преобразования выполняем не модифицируя исходный массив students__________

// 5. Отсортируйте студентов по успеваемости (лучший идёт первым)
const ratingStudents = [...students].sort((b, a) => a.scores - b.scores)
console.log(ratingStudents)

// 5a. Отсортируйте студентов по алфавиту
const sortToName = [...students].sort((a, b) => a.name > b.name)
console.log(sortToName)

// 6. Сформируйте массив студентов, у которых 100 и более баллов
const filteredStudents = students.filter(f => f.scores >= 100)
console.log(filteredStudents)

// 6a.Сформируйте массив из трёх лучших студентов
const topStudents = [...students]
    .sort((a, b) => b.scores - a.scores)
    .filter((f, i) => i < 3)
console.log(topStudents)

// 6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки
const concatSortedStudents = deepCopyStudents.concat(topStudents)
console.log(concatSortedStudents)

// 7. Сформируйте массив холостых студентов
const singleStudents = students.filter(f => !f.isMarried)
console.log(singleStudents)

// 8. Сформируйте массив имён студентов
const getNamesStudents = students.map(m => m.name)
console.log(getNamesStudents)

// 8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
const getStringSpace = students.map(m => m.name).join(' ')
const getStringDot = students.map(m => m.name).join(', ')
console.log(getStringSpace)
console.log(getStringDot)

// 9. Добавьте всем студентам свойство "isStudent" со значением true
const addNewPropertyToStudents = students.map(m => ({...m, isStudent: true}))
console.log(addNewPropertyToStudents)

// 10. Nick женился. Выполните преобразование массива students
let studentsWithMarriedNick = students.map(m => m.name === 'Nick' ? {...m, isMarried: true} : m)
console.log(studentsWithMarriedNick)

// 11. Найдите Студентку по имени Ann
const findAnn = students.filter(f => f.name === 'Ann')
console.log(findAnn)

// 12. Найдите студента с самым высоким баллом
const theBestStudent = students.reduce((acc, el) => acc.scores > el.scores ? acc : el)
console.log(theBestStudent)

// 12a. Найдите 2 студента с самым высоким баллом
const twoBestStudents = [...students]
    .sort((a, b) => b.scores - a.scores)
    .filter((f, i) => i < 2)
console.log(twoBestStudents)

// 13. Найдите сумму баллов всех студентов
const sumAllCountsStudents = students.reduce((acc, el) => acc + el.scores, 0)
console.log(sumAllCountsStudents)

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (arr) => {
    return arr.map(m => {
        return (
            {
                ...m, friends:
                    students
                        .map(m => m.name)
                        .filter(f => f !== m.name)
            }
        )
    })
}
console.log(addFriends(students))
console.log(students)