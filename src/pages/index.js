import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ASK_ARGUMENT, ASK_ANSWERE } from "../constants/teachingmodes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/multiplay-to-nine">
      Lets learn multiplay to <span>nine</span>
    </Link>
    <br />
    <Link to="/gues-operation" state={{ teachmode: `${ASK_ANSWERE}` }}>
      Lets guess multiplay result
    </Link>
    <br />
    <Link to="/gues-operation" state={{ teachmode: `${ASK_ARGUMENT}` }}>
      Lets guess multiplay operands
    </Link>
    <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
