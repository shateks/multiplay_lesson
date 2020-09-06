import React from "react"

const AnswereField = ({
  input,
  result,
  correct,
  confirmed,
  classInput,
  classResult,
}) => {
  const cssResultVisible =
    confirmed && !correct ? "answere-field-visible" : "answere-field-hidden"
  const cssTickVisible =
    confirmed && correct ? "answere-field-visible" : "answere-field-hidden"
  return (
    <div className="answere-field__wraper">
      <div
        className={`${classResult} multiplay-item answere-field-result ${cssResultVisible}`}
      >
        {result}
      </div>
      <p className={`${classInput} multiplay-item answere-field-input`}>
        {input}
      </p>
      <div
        id="answere-cross"
        className={`${classInput} ${cssResultVisible}`}
      ></div>
      <div
        id="answere-tick"
        className={`${classInput} ${cssTickVisible}`}
      ></div>
    </div>
  )
}
export default AnswereField
