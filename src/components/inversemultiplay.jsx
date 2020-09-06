import React from "react"
import { useState, useEffect } from "react"
import Numkeypad from "./numkeypad"
import AnswereField from "./answerefield"
import {
  ASK_FIRST_AGR,
  ASK_SECOND_AGR,
  ASK_ANSWERE,
} from "../constants/teachingmodes"

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
      let ret_obj
      switch (mode) {
        case ASK_FIRST_AGR:
          ret_obj = {
            first: answere,
            second: operation.second,
            result: operation.result,
          }
          break
        case ASK_SECOND_AGR:
          ret_obj = {
            first: operation.first,
            second: answere,
            result: operation.result,
          }
          break
        case ASK_ANSWERE:
          ret_obj = {
            first: operation.first,
            second: operation.second,
            result: answere,
          }
          break
      }
      callback(ident, ret_obj)
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
      {/* <div className="multiplay-task"> */}
      {/* <p>{`${operation.first} x ${operation.second} = `}</p> */}
      <div className="multiplay-item multiplay-first-lower">
        {operation.first}
      </div>
      <div className="multiplay-item multiplay-mul">x</div>
      <div className="multiplay-item multiplay-sec-lower">
        {operation.second}
      </div>
      <div className="multiplay-item multiplay-eq">=</div>
      {/* </div> */}
      <AnswereField
        input={answere}
        result={operation.result}
        correct={correct}
        confirmed={lock}
        classInput="multiplay-result-lower"
        classResult="multiplay-result-upper"
        // className={`multiplay-item ${colorizeResult(correct, lock)}`}
      />
    </div>
  )

  const askFirstArgument = (
    <div className="multiplay__operation" onClick={onClick}>
      <AnswereField
        input={answere}
        result={operation.first}
        correct={correct}
        confirmed={lock}
        classInput="multiplay-first-lower"
        classResult="multiplay-first-upper"
      />
      {/* <div className="multiplay-task"> */}
      <div className="multiplay-item multiplay-mul">x</div>
      <div className="multiplay-item multiplay-sec-lower">
        {operation.second}
      </div>
      <div className="multiplay-item multiplay-eq">=</div>
      <div className="multiplay-item multiplay-result-lower">
        {operation.result}
      </div>
      {/* </div> */}
    </div>
  )

  const askSecondArgument = (
    <div className="multiplay__operation" onClick={onClick}>
      {/* <div className="multiplay-task"> */}
      <div className="multiplay-item multiplay-first-lower">
        {operation.first}
      </div>
      <div className="multiplay-item multiplay-mul">x</div>
      <AnswereField
        input={answere}
        result={operation.second}
        correct={correct}
        confirmed={lock}
        classInput="multiplay-sec-lower"
        classResult="multiplay-sec-upper"
      />
      <div className="multiplay-item multiplay-eq">=</div>
      <div className="multiplay-item multiplay-result-lower">
        {operation.result}
      </div>
    </div>
  )

  const getOpration = () => {
    switch (mode) {
      case ASK_FIRST_AGR:
        return askFirstArgument
      case ASK_SECOND_AGR:
        return askSecondArgument
      case ASK_ANSWERE:
        return askResult
    }
  }

  return (
    <div className="multiplay__wraper">
      {getOpration()}
      <div>
        <Numkeypad sendKey={evaluate} />
      </div>
    </div>
  )
}

export default InverseMultiplay
