import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ASK_ARGUMENT, ASK_ANSWERE } from "../constants/teachingmodes"
import conf from "../constants/configconsts"
import { getRange, toggleNumer, getNumer } from "../utils/configuration"

const IndexPage = () => {
  useEffect(() => {
    console.log(getRange())
  })
  const [dummy, setDummy] = useState(0)

  const updateCheckBox = name => {
    toggleNumer(name)
    setDummy(dummy => ++dummy)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="option-wrapper">
        <div className="option-elem">
          <input
            id="nines"
            type="checkbox"
            checked={getNumer(conf.nines)}
            onClick={() => updateCheckBox(conf.nines)}
          />
          <label htmlFor="nines">Nines</label>
        </div>
        <div className="option-elem">
          <input
            id="eights"
            type="checkbox"
            checked={getNumer(conf.eights)}
            onClick={() => updateCheckBox(conf.eights)}
          />
          <label htmlFor="eights">Eights</label>
        </div>
        <div className="option-elem">
          <input
            id="sevens"
            type="checkbox"
            checked={getNumer(conf.sevens)}
            onClick={() => updateCheckBox(conf.sevens)}
          />
          <label htmlFor="sevens">Sevens</label>
        </div>
        <div className="option-elem">
          <input
            id="sixes"
            type="checkbox"
            checked={getNumer(conf.sixes)}
            onClick={() => updateCheckBox(conf.sixes)}
          />
          <label htmlFor="sixes">Sixes</label>
        </div>
        <div className="option-elem">
          <input
            id="fives"
            type="checkbox"
            checked={getNumer(conf.fives)}
            onClick={() => updateCheckBox(conf.fives)}
          />
          <label htmlFor="fives">Fives</label>
        </div>
        <div className="option-elem">
          <input
            id="fours"
            type="checkbox"
            checked={getNumer(conf.fours)}
            onClick={() => updateCheckBox(conf.fours)}
          />
          <label htmlFor="fours">Fours</label>
        </div>
        <div className="option-elem">
          <input
            id="threes"
            type="checkbox"
            checked={getNumer(conf.threes)}
            onClick={() => updateCheckBox(conf.threes)}
          />
          <label htmlFor="threes">Threes</label>
        </div>
        <div className="option-elem">
          <input
            id="twos"
            type="checkbox"
            checked={getNumer(conf.twos)}
            onClick={() => updateCheckBox(conf.twos)}
          />
          <label htmlFor="twos">Twos</label>
        </div>
        <div className="option-elem">
          <input
            id="ones"
            type="checkbox"
            checked={getNumer(conf.ones)}
            onClick={() => updateCheckBox(conf.ones)}
          />
          <label htmlFor="ones">Ones</label>
        </div>
      </div>
      <Link
        className="link"
        to="/gues-operation"
        state={{
          teachmode: `${ASK_ANSWERE}`,
          range: getRange(),
        }}
      >
        Calculate multiplay result
      </Link>
      <br />
      <Link
        className="link"
        to="/gues-operation"
        state={{
          teachmode: `${ASK_ARGUMENT}`,
          range: getRange(),
        }}
      >
        Calculate multiplay operands
      </Link>
      <br />
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
