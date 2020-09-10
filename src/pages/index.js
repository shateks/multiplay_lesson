import React, { useState, useEffect } from "react"
import { Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ASK_ARGUMENT, ASK_ANSWERE } from "../constants/teachingmodes"
import conf from "../constants/configconsts"
import { getRange, toggleNumer, getNumer } from "../utils/configuration"
import { useIntl } from "react-intl"

const IndexPage = () => {
  const intl = useIntl()
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
          <label htmlFor="nines">{intl.formatMessage({ id: "nines" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="eights"
            type="checkbox"
            checked={getNumer(conf.eights)}
            onClick={() => updateCheckBox(conf.eights)}
          />
          <label htmlFor="eights">{intl.formatMessage({ id: "eights" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="sevens"
            type="checkbox"
            checked={getNumer(conf.sevens)}
            onClick={() => updateCheckBox(conf.sevens)}
          />
          <label htmlFor="sevens">{intl.formatMessage({ id: "sevens" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="sixes"
            type="checkbox"
            checked={getNumer(conf.sixes)}
            onClick={() => updateCheckBox(conf.sixes)}
          />
          <label htmlFor="sixes">{intl.formatMessage({ id: "sixes" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="fives"
            type="checkbox"
            checked={getNumer(conf.fives)}
            onClick={() => updateCheckBox(conf.fives)}
          />
          <label htmlFor="fives">{intl.formatMessage({ id: "fives" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="fours"
            type="checkbox"
            checked={getNumer(conf.fours)}
            onClick={() => updateCheckBox(conf.fours)}
          />
          <label htmlFor="fours">{intl.formatMessage({ id: "fours" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="threes"
            type="checkbox"
            checked={getNumer(conf.threes)}
            onClick={() => updateCheckBox(conf.threes)}
          />
          <label htmlFor="threes">{intl.formatMessage({ id: "threes" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="twos"
            type="checkbox"
            checked={getNumer(conf.twos)}
            onClick={() => updateCheckBox(conf.twos)}
          />
          <label htmlFor="twos">{intl.formatMessage({ id: "twos" })}</label>
        </div>
        <div className="option-elem">
          <input
            id="ones"
            type="checkbox"
            checked={getNumer(conf.ones)}
            onClick={() => updateCheckBox(conf.ones)}
          />
          <label htmlFor="ones">{intl.formatMessage({ id: "ones" })}</label>
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
        {intl.formatMessage({ id: "calcul_result" })}
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
        {intl.formatMessage({ id: "calcul_operands" })}
      </Link>
      <br />
    </Layout>
  )
}

export default IndexPage
