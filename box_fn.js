// const nextCharForNumberString = str => {
//   const trimmed = str.trim()
//   const number = parseInt(trimmed)
//   const nextNumber = number + 1
//   return String.fromCharCode(nextNumber)
// }

const Box = x =>
({
  fold: f => f(x),
  map: f => Box(f(x)),           //Identity functor
  inspect: () => `Box(${x})`
})

const nextCharForNumberString = str =>
  Box(str)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase())


const result = nextCharForNumberString(' 64 ')

console.log(result)

//Take aways
// Removed state from function. (no more variable declarations)
// created flow
