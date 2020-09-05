const MulTo9 = require("./combinations")

test("Basic if true is true", () => {
  expect(true).toBe(true)
})

const test_array_5 = [
  "1x5",
  "2x5",
  "3x5",
  "4x5",
  "5x5",
  "5x6",
  "5x7",
  "5x8",
  "5x9",
]
const test_array_7to9 = [
  "1x7",
  "2x7",
  "3x7",
  "4x7",
  "5x7",
  "6x7",
  "7x7",
  "7x8",
  "7x9",
  "1x8",
  "2x8",
  "3x8",
  "4x8",
  "5x8",
  "6x8",
  "8x8",
  "8x9",
  "1x9",
  "2x9",
  "3x9",
  "4x9",
  "5x9",
  "6x9",
  "9x9",
]

test("Multable 7 to 9", () => {
  const mulObj = MulTo9.genMultiplayCombinations(7, 9)
  for (let element of test_array_7to9) {
    expect(mulObj).toHaveProperty(element)
  }
})

test("Multable 9 to 7", () => {
  const mulObj = MulTo9.genMultiplayCombinations(9, 7)
  for (let element of test_array_7to9) {
    expect(mulObj).toHaveProperty(element)
  }
})

test("Multable only 5", () => {
  const mulObj = MulTo9.genMultiplayCombinations(5)
  for (let element of test_array_5) {
    expect(mulObj).toHaveProperty(element)
  }
})
