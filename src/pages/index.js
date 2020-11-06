import React, { useState, useEffect } from "react"
import { Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ASK_ARGUMENT, ASK_ANSWERE } from "../constants/teachingmodes"
import conf, { numbersMap } from "../constants/configconsts"
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

  let numbersList = []
  {
    for (const [key, val] of numbersMap) {
      numbersList.push(
        <div className="option-elem" key={key}>
          <input
            id={key}
            type="checkbox"
            onChange={event => {
              updateCheckBox(conf[key])
            }}
            checked={getNumer(conf[key])}
          />
          <label htmlFor={key}>{intl.formatMessage({ id: key })}</label>
        </div>
      )
    }
  }
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })} lang={intl.locale} />
      <div className="option-wrapper">{numbersList}</div>
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
