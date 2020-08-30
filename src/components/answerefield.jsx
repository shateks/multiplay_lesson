import React from "react"

const AnswereField = ({ input, result, correct, confirmed }) => {
  const cssResultVisible =
    confirmed && !correct ? "answere-field-result__visible" : ""
  return (
    <div className="answere-field__wraper">
      <div className={`answere-field-result ${cssResultVisible}`}>{result}</div>
      {/* <div className="answere-field-input__wraper"> */}
      <div className="answere-auxlary-div">
        <p className="answere-field-input">{input}</p>
        <div id="cross"></div>
      </div>
    </div>
  )
}
export default AnswereField
