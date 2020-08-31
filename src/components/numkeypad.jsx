import React from "react"

export default function Numkeypad({ sendKey }) {
  const keypad = []
  for (let i = 9; i >= 0; i--) {
    keypad.push(
      <button
        className={`keypad__button ${i === 0 ? "keypad__button--last" : ""}`}
        onClick={() => sendKey(i)}
      >
        {i}
      </button>
    )
  }

  keypad.push(
    <div className="keypad__button--v-x--wrapper">
      <button className="keypad__button--v" onClick={() => sendKey("v")}>
        answere
      </button>
      <button className="keypad__button--x" onClick={() => sendKey("x")}>
        delete
      </button>
    </div>
  )
  return <div className="keypad">{keypad}</div>
}
