class MulOperation {
  constructor(first, second) {
    if (second > first) {
      this.first = first
      this.second = second
    } else {
      this.first = second
      this.second = first
    }
    this.id = first.toString() + "x" + second.toString()
    this.result = first * second
  }
}

class MulCollection {}
const genMultiplayCombinations = function (firstNumber, secondNumber) {
  let a, b
  const ret = {}
  if (firstNumber > secondNumber) {
    a = secondNumber
    b = firstNumber
  } else {
    a = firstNumber
    b = secondNumber
  }
  for (let i = a; i <= b; i++) {
    for (let j = i; j <= b; j++) {
      //   basicCell(i, j)
      let m = new MulOperation(i, j)
      ret[m.id] = m
    }
  }
  return ret
}
const MulToNine = genMultiplayCombinations(1, 9)
export default MulToNine
