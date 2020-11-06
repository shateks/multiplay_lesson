import conf from "../constants/configconsts"

const isNode = () => typeof window === "undefined"

const getItem = str => {
  if (isNode()) {
    return false
  }
  return localStorage.getItem(str)
}

export const getRange = () => {
  const nines = getItem(conf.nines.str) == "true"
  const eights = getItem(conf.eights.str) == "true"
  const sevens = getItem(conf.sevens.str) == "true"
  const sixes = getItem(conf.sixes.str) == "true"
  const fives = getItem(conf.fives.str) == "true"
  const fours = getItem(conf.fours.str) == "true"
  const threes = getItem(conf.threes.str) == "true"
  const twos = getItem(conf.twos.str) == "true"
  const ones = getItem(conf.ones.str) == "true"

  const range = [
    nines && 9,
    eights && 8,
    sevens && 7,
    sixes && 6,
    fives && 5,
    fours && 4,
    threes && 3,
    twos && 2,
    ones && 1,
  ].filter(elem => elem != false)
  return range
}

const toggleNumer = name => {
  let val = localStorage.getItem(name.str)
  localStorage.setItem(name.str, (!(val == "true")).toString())
}

const getNumer = name => {
  return getItem(name.str) == "true"
}

export { toggleNumer, getNumer }
