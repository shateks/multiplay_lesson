import React from "react"
import { useState, useEffect } from "react"
import Numkeypad from "./numkeypad"
import AnswereField from "./answerefield"

const InverseMultiplay = ({
  operation,
  callback,
  ident,
  mode,
  correct,
  lock,
  onClick,
}) => {
  const [tens, setTens] = useState(0)
  //   const [mode, setMode]= useState(0)
  const [answere, setAnswere] = useState(undefined)

  function clearValues() {
    setTens(0)
    setAnswere(undefined)
  }

  const evaluate = val => {
    if (lock) return
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(val)) {
      setAnswere(10 * tens + val)
      setTens(tens)
      setTens(val)
    }
    if (val === "x") {
      clearValues()
    }
    if (val === "v" && typeof answere === "number") {
      callback(ident, answere)
      console.log(val)
    }
  }

  useEffect(() => {
    if (!lock) {
      clearValues()
    }
    console.log("useEffect")
  }, [ident, lock])

  const colorizeResult = (correct, confirmed) => {
    if (confirmed) {
      if (correct) return "multiplay__operation--correct"
      else return "multiplay__operation--wrong"
    }
    return ""
  }

  const askResult = (
    <div className="multiplay__operation" onClick={onClick}>
      <div className="multiplay-task">
        <p>{`${operation.first} x ${operation.second} = `}</p>
      </div>
      <AnswereField
        input={answere}
        result={operation.result}
        correct={correct}
        confirmed={lock}
        className={colorizeResult(correct, lock)}
      />
    </div>
  )

  const askFirstArgument = (
    <div className="multiplay__operation" onClick={onClick}>
      <div className="multiplay-task">
        <AnswereField
          input={answere}
          result={operation.result}
          correct={correct}
          confirmed={lock}
          className={colorizeResult(correct, lock)}
        />
        <p>{` x ${operation.second} = ${operation.result}`}</p>
      </div>
    </div>
  )

  const askSecondArgument = (
    <div className="multiplay__operation" onClick={onClick}>
      <div className="multiplay-task">
        <p>{`${operation.first} x `}</p>
        <AnswereField
          input={answere}
          result={operation.result}
          correct={correct}
          confirmed={lock}
          className={colorizeResult(correct, lock)}
        />
        <p>{` = ${operation.result}`}</p>
      </div>
    </div>
  )

  return (
    <div className="multiplay__wraper">
      {/* {askResult()} */}
      {askFirstArgument}
      {/* {askSecondArgument} */}
      {/* <div className="multiplay__operation" onClick={onClick}>
        <div className="multiplay-task">
          <p>{`${operation.first} x ${operation.second} = `}</p>
        </div>
        <AnswereField
          input={answere}
          result={operation.result}
          correct={correct}
          confirmed={lock}
          className={colorizeResult(correct, lock)}
        />
      </div> */}
      <div>
        <Numkeypad sendKey={evaluate} />
      </div>
    </div>
  )
}

export default InverseMultiplay
