// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatStringCycle = (string, number, separator) => {
    let result = ''
    for (let i = 1; i <= number; i++) {
        if (number !== i) {
            result += string + separator
        }
        if (number === i) {
            result += string
        }
    }
    return result
}
console.log(repeatStringCycle("yo", 3, " "))
console.log(repeatStringCycle("yo", 3, ","))

const repeatStringMethod = (string, number, separator) => {
    const repeat = (string + separator).repeat(3)
    return repeat.slice(0, (string + separator).repeat(3).length - 1)
}
console.log(repeatStringMethod("yo", 3, " "))
console.log(repeatStringMethod("yo", 3, ","))

// 2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStartCycle = (string, substring) => {
    let result = 0
    for (let i = 0; i < substring.length; i++) {
        if (string[i].toLowerCase() === substring[i].toLowerCase()) {
            result++
        }
    }
    return result === substring.length
}
console.log(checkStartCycle("Incubator", "inc"))
console.log(checkStartCycle("Incubator", "yo"))

const checkStartMethodStartsWith = (string, substring) => {
    return string.toLowerCase().startsWith(substring.toLowerCase())
}
console.log(checkStartMethodStartsWith("Incubator", "inc"))
console.log(checkStartMethodStartsWith("Incubator", "yo"))

const checkStartMethodSlice = (string, substring) => {
    return string.toLowerCase().slice(0, substring.length) === substring.toLowerCase()
}
console.log(checkStartMethodSlice("Incubator", "inc"))
console.log(checkStartMethodSlice("Incubator", "yo"))

const checkStartMethodIndexOf = (string, substring) => {
    let count = 0
    for (let i = 0; i < substring.length; i++) {
        if (i === string.toLowerCase().indexOf(substring[i])) {
            count++
        }
    }
    return substring.length === count
}
console.log(checkStartMethodIndexOf("Incubator", "inc"))
console.log(checkStartMethodIndexOf("Incubator", "yo"))

// 3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
// truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateStringCycle = (string, number) => {
    let result = ''
    for (let i = 0; i <= number; i++) {
        if (number !== i) {
            result += string[i]
        } else {
            result += `...`
        }
    }
    return result
}
console.log(truncateStringCycle("Всем студентам инкубатора желаю удачи!", 10))

const truncateString = (string, number) => {
    return `${string.slice(0, number)}...`
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

// 4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (string) => {
    return !!string.trim() ? string.trim().split(' ').sort((a, b) => a.length - b.length)[0] : null
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))

// 5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (string) => {
    return string.split(' ').map(m => m[0].toUpperCase() + m.toLowerCase().slice(1)).join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!!!!!!!!!!!

// 6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

const isIncludes = (string, substring) => {
    return string.toLowerCase().trim().split('')
        .map(m => substring.toLowerCase().trim().split('').map(e => e === m).filter(f => f))
        .flat().length === substring.trim().length
}

console.log(isIncludes("Incubator", "Cut ")) // true
console.log(isIncludes("Incubator", "inba")) // true

console.log(isIncludes("Incubator", "inbba")) // true
console.log(isIncludes("Incubator", "Incubatorrr")) // true

console.log(isIncludes("Incubator", "table")) // false
console.log(isIncludes("hello", "hey")) // false

const isIncludesWithStar = (string, substring) => {
    return string.toLowerCase().trim().split('')
        .map(m => [...new Set(substring.toLowerCase().trim().split(''))].map(e => e === m).filter(f => f))
        .flat().length === substring.trim().length
}

console.log(isIncludesWithStar("Incubator", "Cut ")) // true
console.log(isIncludesWithStar("Incubator", "inba")) // true

console.log(isIncludesWithStar("IncubatorB", "inbba")) // true
console.log(isIncludesWithStar("RIncubator", "Incubatorr")) // true

console.log(isIncludesWithStar("Incubator", "inbba")) // false
console.log(isIncludesWithStar("Incubator", "Incubatorrr")) // false

console.log(isIncludesWithStar("Incubator", "table")) // false
console.log(isIncludesWithStar("hello", "hey")) // false