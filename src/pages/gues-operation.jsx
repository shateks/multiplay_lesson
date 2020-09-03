import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Multiplay from "../components/multiplay"
import MulToNine from "../constants/combinations"
import Congrat from "../components/congrat"
import InverseMul from "../components/inversemultiplay"
import {
  ASK_FIRST_AGR,
  ASK_ARGUMENT,
  ASK_SECOND_AGR,
  ASK_ANSWERE,
} from "../constants/teachingmodes"

export default function GuesOperation({ location }) {
  const [initLength, setInitLength] = useState(Object.keys(MulToNine).length)
  const [mulTable, setMulMap] = useState({ ...MulToNine })
  const [correct, setCorrect] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [allDone, setAllDone] = useState(false)
  const [mode, setMode] = useState(getProperMode())

  const getRandomKey = table => {
    const keys = Object.keys(table)
    return keys[Math.floor(Math.random() * keys.length)]
  }

  function getProperMode() {
    if (location.state.teachmode === ASK_ANSWERE) {
      return ASK_ANSWERE
    } else if (location.state.teachmode === ASK_ARGUMENT) {
      const arr = [ASK_FIRST_AGR, ASK_SECOND_AGR]
      return arr[Math.floor(Math.random() * arr.length)]
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
          console.log("No more operations !!!")
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
    setMulMap({ ...MulToNine })
    setInitLength(Object.keys(MulToNine).length)
  }, [])

  return (
    <Layout>
      {allDone ? (
        <Congrat />
      ) : (
        <>
          <div>
            {Object.keys(mulTable).length} of {initLength}
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
