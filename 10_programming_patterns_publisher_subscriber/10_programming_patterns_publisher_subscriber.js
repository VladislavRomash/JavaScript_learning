// publisher / subscriber

// store.subscribe(function subscriber() {}) // стор изменился
// promise.then(function subscriber() {}) // промис зарезолвился
// setTimeout(function subscriber() {}, 1000) // прошла секунда
// button.addEventListener('click', function subscriber() {}) // произошел 'click' по кнопке

// subscriber == listener == observer == watcher == handler

const button = {
    _subscribers: {
        'click': [],
        'doubleClick': [],
        'onFocus': []
    },
    click() {
        this._subscribers['click'].forEach(subscriber => subscriber())
    },
    doubleClick() {
        this._subscribers['doubleClick'].forEach(subscriber => subscriber())
    },
    onFocus() {
        this._subscribers['onFocus'].forEach(subscriber => subscriber())
    },
    addEventListener(eventName, subscriber) {
        this._subscribers[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(sub => sub != subscriber)
    }
}

const show = () => console.log('Show')
const request = () => console.log('Request')

button.addEventListener('click', show)
button.addEventListener('click', request)

button.click()

button.removeEventListener('click', show)
console.log('after removeEventListener')

button.click()


// _____ Новые методы ECMAScript 2023 _____

const languages = ['Russian', 'English', 'Deutsch'];

// Метод toSorted возвращает новый отсортированный массив

const sorted = languages.toSorted();
console.log(sorted); // => ['Deutsch', 'English', 'Russian']
console.log(languages); // => ['Russian', 'English', 'Deutsch']
console.log(Object.is(languages, sorted)); // false

// Использование метода toReversed возвращает новый массив, отсортированный в обратном порядке

const reversed = languages.toReversed();
console.log(reversed); // ['Deutsch', 'English', 'Russian']
console.log(Object.is(languages, reversed)); // false

// toSpliced возвращает новый массив без удаленных элементов и с добавленными элементами

const spliced = languages.toSpliced(2, 1, 'Chinese', 'Spanish');
console.log(spliced); // ['Russian', 'English', 'Chinese', 'Spanish']
console.log(Object.is(languages, spliced)); // false

// Метод with является эквивалентом копирования использования квадратных скобок для изменения одного элемента массива

const updated = languages.with(2, 'Chinese');
console.log(updated);  // ['Russian', 'English', 'Chinese']
console.log(languages); // ['Russian', 'English', 'Deutsch']