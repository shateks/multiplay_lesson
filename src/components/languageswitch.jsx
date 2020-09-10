import React, { useState } from "react"
import { VscGlobe, VscTriangleDown } from "react-icons/vsc"
import { BiWorld } from "react-icons/bi"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

export default function Languageswitch() {
  const [backdrop, setBackdrop] = useState(false)

  const hidden = backdrop === false ? "backdrop-hidden" : ""
  return (
    <>
      <div id="language-switch" onClick={() => setBackdrop(true)}>
        <BiWorld id="globe-icon" />
        <VscTriangleDown id="triangle-icon" />
      </div>
      <div
        className={`modal-background ${hidden}`}
        onClick={() => setBackdrop(false)}
      ></div>
      <div className={`modal ${hidden}`} onClick={() => setBackdrop(false)}>
        <div id="modal-caption">Select the language</div>
        <IntlContextConsumer>
          {() => {
            return (
              <>
                <div
                  class="modal-option"
                  id="modal-option-en"
                  onClick={() => {
                    console.log("english")
                    changeLocale("en")
                  }}
                >
                  english
                </div>
                <div
                  class="modal-option"
                  id="modal-option-pl"
                  onClick={() => changeLocale("pl")}
                >
                  polski
                </div>
              </>
            )
          }}
        </IntlContextConsumer>
      </div>
    </>
  )
}
