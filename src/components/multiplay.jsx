import React from "react"
import MulToNine from "../constants/combinations"
import { useState } from "react"

const Multiplay = ({ operation, callback, ident }) => {
  return (
    <div>
      <div>
        {`${operation.first} x ${operation.second} = ${operation.result}`}
      </div>
      <div>
        <button onClick={() => callback(ident, 10)}>Delate</button>
      </div>
    </div>
  )
}

export default Multiplay
