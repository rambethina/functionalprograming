const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

// console.log(isOdd(20))

const filter = pred => xs => xs.filter(pred)

const getAllOdds = filter(isOdd)

// const res = getAllOdds([1, 2, 3, 4])
const res = getAllOdds()

console.log(res)
