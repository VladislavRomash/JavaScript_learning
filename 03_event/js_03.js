// обработчик, слушатель, подписчик / handler, listener, subscriber => function
// function (вызывает брпузер) => callback
// {...} => объект в котором содержаться сведенья о событии => Event => event => ev => e
// new Array(), new Object(), new Event() => построен на базе страндартного шаблоного объекта Event
// function (Event)


const sm = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')

// __________bubbling phase = фаза всплытия__________
// const handler = (e) => {
//     console.log(e.target, ':', e.currentTarget)
// }
//
// sm.addEventListener('click', handler)
// medium.addEventListener('click', handler)
// big.addEventListener('click', handler)

// __________capturing phase = фаза погружения__________
// const handler = (e) => {
//     console.log(e.target, ':', e.currentTarget)
// }
// sm.addEventListener('click', handler, {capture: true, once: true})
// medium.addEventListener('click', (e) => {
//     alert(e.currentTarget)
// }, true)
// big.addEventListener('click', handler, true)

// __________remove__________
// event.removeEventListener('click', handler)

// __________STOP bubbling phase__________
// event.stopPropagation()

// currentTarget дает доступ к тому элементу, на который был повешен обработчик

// __________change default behavior__________
// event.preventDefault()