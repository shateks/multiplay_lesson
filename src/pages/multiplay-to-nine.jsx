import React, { useState } from "react"
import Layout from "../components/layout"
import Multiplay from "../components/multiplay"
import MulToNine from "../constants/combinations"

const MultiplayToNine = () => {
  const getRandomKey = () => {
    const keys = Object.keys(mulMap)
    return keys[Math.floor(Math.random() * keys.length)]
  }
  const [mulMap, setMulMap] = useState(MulToNine)
  const [key, setKey] = useState(getRandomKey())

  //   const operation = mulMap[key]
  //   console.log("render")

  const verify = (ident, result) => {
    const newMul = mulMap
    delete newMul[ident]
    setMulMap(newMul)
    setKey(getRandomKey())
    console.log(ident)
  }

  return (
    <Layout>
      Hej from multiplay_to_nine
      <Multiplay mul={mulMap[key]} ident={key} callback={verify} />
    </Layout>
  )
}

export default MultiplayToNine
