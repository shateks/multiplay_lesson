const MulTo9 = require("./combinations")

test("Basic if true is true", () => {
  expect(true).toBe(true)
})

const test_array = ["7x7", "7x8", "7x9", "8x8", "8x9", "9x9"]

test("Multable 7 to 9", () => {
  debugger
  const mulObj = MulTo9.genMultiplayCombinations(7, 9)
  for (let element of test_array) {
    expect(mulObj).toHaveProperty(element)
  }
})
