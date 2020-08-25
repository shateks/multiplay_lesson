import React from "react"
import MulToNine from "../constants/combinations"
import { useState } from "react"

const Multiplay = ({ mul, callback, ident }) => {
  const operation = mul
  const [_key, set_key] = useState(ident)
  //   const keys = Object.keys(operations)
  //   console.log(keys)
  //   const operation = operations[keys[Math.floor(Math.random() * keys.length)]]
  //   console.log(operation)
  console.log(ident)
  return (
    <div>
      <div>
        {`${operation.first} x ${operation.second} = ${operation.result}`}
      </div>
      <div>
        <button onClick={() => callback(_key, 10)}>Delate</button>
      </div>
    </div>
  )
}

export default Multiplay
