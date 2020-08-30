import React, { useState } from "react"
import Layout from "../components/layout"
import Multiplay from "../components/multiplay"
import MulToNine from "../constants/combinations"

const MultiplayToNine = () => {
  const getRandomKey = () => {
    const keys = Object.keys(mulTable)
    return keys[Math.floor(Math.random() * keys.length)]
  }
  const [mulTable, setMulMap] = useState(MulToNine)
  const [key, setKey] = useState(getRandomKey())
  const [correct, setCorrect] = useState(false)
  const [answered, setAnswered] = useState(false)
  const verify = (ident, result) => {
    if (result == mulTable[ident].result) {
      console.log("jej")
      setCorrect(true)
    } else {
      console.log("no")
      setCorrect(false)
    }
    setAnswered(true)
    // setMulMap(prev => {
    //   delete prev[ident]
    //   return prev
    // })
    // setKey(getRandomKey())
  }

  const getNextHandler = () => {
    setKey(getRandomKey())
    setAnswered(false)
  }

  return (
    <Layout>
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
    </Layout>
  )
}

export default MultiplayToNine
