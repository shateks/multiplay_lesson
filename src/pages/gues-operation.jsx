import React, { useState } from "react"
import Layout from "../components/layout"
import Multiplay from "../components/multiplay"
import MulToNine from "../constants/combinations"
import Congrat from "../components/congrat"
import InverseMul from "../components/inversemultiplay"
import {
  ASK_FIRST_AGR,
  ASK_SECOND_AGR,
  ASK_ANSWERE,
} from "../constants/teachingmodes"

export default function GuesOperation() {
  const [mulTable, setMulMap] = useState(MulToNine)
  const [correct, setCorrect] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [allDone, setAllDone] = useState(false)

  const getRandomKey = () => {
    const keys = Object.keys(mulTable)
    return keys[Math.floor(Math.random() * keys.length)]
  }

  const [key, setKey] = useState(getRandomKey())

  const verify = (ident, answere) => {
    if (
      answere.result == mulTable[ident].result &&
      answere.first == mulTable[ident].first &&
      answere.second == mulTable[ident].second
    ) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
    setAnswered(true)
  }

  const getNextHandler = () => {
    if (answered) {
      if (correct) {
        if (Object.keys(mulTable).length > 1) {
          setMulMap(prev => {
            delete prev[key]
            return prev
          })
        } else {
          console.log("No more operations !!!")
          setAllDone(true)
        }
      }
      setKey(getRandomKey())
      setAnswered(false)
    }
  }

  return (
    <Layout>
      {allDone ? (
        <Congrat />
      ) : (
        <div className="multiplayToNine-wraper">
          <InverseMul
            operation={mulTable[key]}
            ident={key}
            mode={ASK_FIRST_AGR}
            callback={verify}
            correct={correct}
            lock={answered}
            onClick={getNextHandler}
          />
        </div>
      )}
    </Layout>
  )
}
