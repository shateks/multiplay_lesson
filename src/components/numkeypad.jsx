import React from "react"
import { useIntl } from "gatsby-plugin-intl"

export default function Numkeypad({ sendKey }) {
  const intl = useIntl()
  const keypad = []
  for (let i = 9; i >= 0; i--) {
    keypad.push(
      <button
        key={i.toString()}
        className={`keypad__button ${i === 0 ? "keypad__button--last" : ""}`}
        onClick={() => sendKey(i)}
      >
        {i}
      </button>
    )
  }

  keypad.push(
    <div key="numpad" className="keypad__button--v-x--wrapper">
      <button
        key="v"
        className="keypad__button--v"
        onClick={() => sendKey("v")}
      >
        {intl.formatMessage({ id: "answere" })}
      </button>
      <button
        key="x"
        className="keypad__button--x"
        onClick={() => sendKey("x")}
      >
        {intl.formatMessage({ id: "delete" })}
      </button>
    </div>
  )
  return <div className="keypad">{keypad}</div>
}
