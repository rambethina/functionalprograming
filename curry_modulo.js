// const modulo = (dvr, dvd) => dvd % dvr
const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

console.log(isOdd(20))
