import React, { useState } from "react"
import Layout from "../components/layout"
import Multiplay from "../components/multiplay"
import MulToNine from "../constants/combinations"
import Congrat from "../components/congrat"
const MultiplayToNine = () => {
  const getRandomKey = () => {
    const keys = Object.keys(mulTable)
    return keys[Math.floor(Math.random() * keys.length)]
  }
  const [mulTable, setMulMap] = useState(MulToNine)
  const [key, setKey] = useState(getRandomKey())
  const [correct, setCorrect] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [allDone, setAllDone] = useState(false)
  const verify = (ident, result) => {
    if (result == mulTable[ident].result) {
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
          Hej from multiplay_to_nine
          <button onClick={getNextHandler}>get next operation</button>
          <Multiplay
            operation={mulTable[key]}
            ident={key}
            callback={verify}
            correct={correct}
            lock={answered}
          />
        </div>
      )}
    </Layout>
  )
}

export default MultiplayToNine
