const Sum = x =>
({
  x,
  // concat: sum =>  Sum(sum.x + x),
  // concat: o =>  Sum(x + o.x),
  concat: ({x: y}) =>  Sum(x + y),
  inspect: () => `Sum(${x})`
})

const result = Sum(1).concat(Sum(2))
console.log(result)
