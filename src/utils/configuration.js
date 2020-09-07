import conf from "../constants/configconsts"
export const getRange = () => {
  const nines = localStorage.getItem(conf.nines.str) == "true"
  const eights = localStorage.getItem(conf.eights.str) == "true"
  const sevens = localStorage.getItem(conf.sevens.str) == "true"
  const sixes = localStorage.getItem(conf.sixes.str) == "true"
  const fives = localStorage.getItem(conf.fives.str) == "true"
  const fours = localStorage.getItem(conf.fours.str) == "true"
  const threes = localStorage.getItem(conf.threes.str) == "true"
  const twos = localStorage.getItem(conf.twos.str) == "true"
  const ones = localStorage.getItem(conf.ones.str) == "true"

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

export const toggleNumer = name => {
  let val = localStorage.getItem(name.str)
  localStorage.setItem(name.str, (!(val == "true")).toString())
}

export const getNumer = name => {
  return localStorage.getItem(name.str) == "true"
}
