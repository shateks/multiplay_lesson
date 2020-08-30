import React from "react"
import MulToNine from "../constants/combinations"
import { useState, useEffect } from "react"
import Numkeypad from "./numkeypad"
import AnswereField from "./answerefield"

const Multiplay = ({ operation, callback, ident, correct, lock }) => {
  const [tens, setTens] = useState(0)

  const [result, setResult] = useState(0)
  function cleanValues() {
    setTens(0)
    setResult("")
  }
  const evaluate = val => {
    if (lock) return
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(val)) {
      setResult(10 * tens + val)
      setTens(tens)
      setTens(val)
    }
    if (val === "x") {
      cleanValues()
    }
    if (val === "v" && typeof result === "number") {
      callback(ident, result)
      console.log(val)
    }
  }

  useEffect(() => {
    cleanValues()
    console.log("useEffect")
  }, ident)

  const colorizeResult = (correct, confirmed) => {
    if (confirmed) {
      if (correct) return "multiplay__operation--correct"
      else return "multiplay__operation--wrong"
    }
    return ""
  }

  return (
    <div className="multiplay__wraper">
      <div className={`multiplay__operation ${colorizeResult(correct, lock)}`}>
        <div className="multiplay-task">
          <p>
            {`${operation.first} x ${operation.second} ${
              lock && !correct ? "\u2260" : "="
            }`}
          </p>
        </div>
        <AnswereField
          input={result}
          result={operation.result}
          correct={correct}
          confirmed={lock}
        />
        {/* <div>{`${operation.result}`}</div> */}
      </div>
      <div className="multiplay__result--backdrop">,,,,,,</div>
      <div>
        {/* <button onClick={() => callback(ident, 10)}>Delate</button> */}
        <Numkeypad sendKey={evaluate} />
      </div>
    </div>
  )
}

export default Multiplay
