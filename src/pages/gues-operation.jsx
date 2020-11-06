import React, { useState, useEffect } from "react"
import { navigate, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { genMultiplayCombinations } from "../constants/combinations"
import Congrat from "../components/congrat"
import InverseMul from "../components/multiplaytask"
import {
  ASK_FIRST_AGR,
  ASK_ARGUMENT,
  ASK_SECOND_AGR,
  ASK_ANSWERE,
} from "../constants/teachingmodes"

export default function GuesOperation({
  location: {
    state,
  },
}) {
  let teachmode = undefined
    let range = []  
  if(state != undefined){
    
    teachmode = state.teachmode
     range = state.range ?? []
  }
  
  const intl = useIntl()
  const generateMultable = range => {
    let retMul = {}
    if (range.length === 0) return {}
    for (let elem of range) {
      retMul = { ...retMul, ...genMultiplayCombinations(elem) }
    }
    return retMul
  }
  const MultiplayTable = generateMultable(range)
  const [initLength, setInitLength] = useState(
    Object.keys(MultiplayTable).length
  )
  const [mulTable, setMulMap] = useState({ ...MultiplayTable })
  const [correct, setCorrect] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [allDone, setAllDone] = useState(false)
  const [mode, setMode] = useState(getProperMode())

  const getRandomKey = table => {
    const keys = Object.keys(table)
    return keys[Math.floor(Math.random() * keys.length)]
  }

  function getProperMode() {
    if (teachmode === ASK_ANSWERE) {
      return ASK_ANSWERE
    } else if (teachmode === ASK_ARGUMENT) {
      const arr = [ASK_FIRST_AGR, ASK_SECOND_AGR]
      return arr[Math.floor(Math.random() * arr.length)]
    }
    else{
      return undefined
    }
  }

  const [key, setKey] = useState(getRandomKey(mulTable))

  const verify = (ident, answere) => {
    if (
      answere.result === mulTable[ident].result &&
      answere.first === mulTable[ident].first &&
      answere.second === mulTable[ident].second
    ) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
    setAnswered(true)
  }

  const getNextHandler = () => {
    const _mulTable = mulTable
    if (answered) {
      if (correct) {
        if (Object.keys(_mulTable).length > 1) {
          delete _mulTable[key]
        } else {
          setAllDone(true)
        }
      }
      setMulMap(_mulTable)
      setMode(getProperMode())
      setKey(getRandomKey(_mulTable))
      setAnswered(false)
    }
  }

  useEffect(() => {
    setMulMap({ ...MultiplayTable })
    setInitLength(Object.keys(MultiplayTable).length)
  }, [])

  if (range.length === 0 || mode === undefined) {
    return (
      <Layout>
        <div className="guess-operation-sory" onClick={() => navigate("/")}>
          <h1>{intl.formatMessage({ id: "sorry_choose_oper" })}</h1>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      {allDone ? (
        <Congrat />
      ) : (
        <>
          <div
            className={`guess-operation-next ${
              answered ? "guess-operation-next-visible" : ""
            }`}
            onClick={getNextHandler}
          ></div>
          <div className="guess-operation-of">
            {`${Object.keys(mulTable).length} ${intl.formatMessage({
              id: "of",
            })} ${initLength}`}
          </div>
          <div className="multiplayToNine-wraper">
            <InverseMul
              operation={mulTable[key]}
              ident={key}
              mode={mode}
              callback={verify}
              correct={correct}
              lock={answered}
              onClick={getNextHandler}
            />
          </div>
        </>
      )}
    </Layout>
  )
}
