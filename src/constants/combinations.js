class MulOperation {
  constructor(first, second) {
    this.first = first
    this.second = second
    if (first > second) [this.first, this.second] = [this.second, this.first]
    this.id = this.first.toString() + "x" + this.second.toString()
    this.result = first * second
  }
}

const genMultiplayCombinations = function (firstNumber, secondNumber) {
  const ret = {}
  firstNumber = firstNumber ?? secondNumber
  secondNumber = secondNumber ?? firstNumber
  if (firstNumber > secondNumber)
    [firstNumber, secondNumber] = [secondNumber, firstNumber]

  for (let i = firstNumber; i <= secondNumber; i++) {
    for (let j = 1; j <= 9; j++) {
      let m = new MulOperation(i, j)
      ret[m.id] = m
    }
  }
  return ret
}
const MulToNine = genMultiplayCombinations(1, 9)
export { genMultiplayCombinations }
export default MulToNine
