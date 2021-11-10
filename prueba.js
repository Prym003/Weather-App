let obj = [{ id: 4, name: 'pepe' }, { id: 3, name: 'tito' }, { id: 2, name: 'jose' }]

let check = obj.some(c => c.id !== 2)

console.log(check)

const options = { day: 'numeric', weekday: 'long', year: 'numeric', month: 'short', };
let day = new Date('2021/11/15')
let finalDay = day.toLocaleString("en-US", options)

console.log(day)
console.log(finalDay.split(','))

let day2= new Date('2021/11/16')
let option2 = {weekday: 'short'}
let finalDay2 = day2.toLocaleString('en-US', option2)

console.log(finalDay2)