const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

// const findColor = name =>
//   ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]

const fromNullable = x =>
  x != null ? Right(x) : Left(null)
const findColor = name => {
  // console.log({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])
  // console.log(({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}))
  // const found = ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]
  // return found ? Right(found) : Left(null)
  return fromNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])
}
// const result = Right(3).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
// console.log(result)
// const result = Left(3).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x)
// console.log(result)
const result = findColor('orange')
  .map(c => c.slice(1))
  .fold(e => 'no color',
        c => c.toUpperCase())
console.log(result)

//TODO line 21..not sure I understand.
