import React from "react"

const AnswereField = ({ input, result, correct, confirmed }) => {
  const cssResultVisible =
    confirmed && !correct ? "answere-field-visible" : "answere-field-hidden"
  const cssTickVisible =
    confirmed && correct ? "answere-field-visible" : "answere-field-hidden"
  return (
    <div className="answere-field__wraper">
      <div className={`answere-field-result ${cssResultVisible}`}>{result}</div>
      <p className="answere-field-input">{input}</p>
      <div id="answere-cross" className={cssResultVisible}></div>
      <div id="answere-tick" className={cssTickVisible}></div>
    </div>
  )
}
export default AnswereField
