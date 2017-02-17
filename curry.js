// const add = (x, y) => x + y
//
// const inc = y => add(1, y)
//
// //Preload an argument
//
// const res = add(1, 2)
//
// console.log(res)
// const add = x => y => (x + y)
//
// const testInc = value => add(1, value)
//
// const inc = add(1) // (y => 1 + y)
//
// //Preload an argument
//
// // const res = inc(2)
// const res = testInc(2)
//
// console.log(res)

const add = (x, y) => x + y

const inc = y => add(1, y)

const res = inc(2)

console.log(res)

console.log('*** Another representation ***')

const addOther = x => (y => x + y)

const incOther = addOther(1)  // y => 1 + y

const result = incOther(3)

console.log('Result', result)
