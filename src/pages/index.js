import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { ASK_ARGUMENT, ASK_ANSWERE } from "../constants/teachingmodes"
import ToggleSwitch from "../components/toggleSwitch"

const IndexPage = () => {
  const [nines, setNines] = useState(false)
  const [eights, setEights] = useState(false)
  const [sevens, setSevens] = useState(false)
  const [sixes, setSixes] = useState(false)
  const [fives, setFives] = useState(false)
  const [fours, setFours] = useState(false)
  const [threes, setThrees] = useState(false)
  const [twos, setTwos] = useState(false)
  const [ones, setOnes] = useState(false)
  const range = [
    nines && 9,
    eights && 8,
    sevens && 7,
    sixes && 6,
    fives && 5,
    fours && 4,
    threes && 3,
    twos && 2,
    ones && 1,
  ].filter(elem => elem != false)

  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p> */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      {/* <Image /> */}
      <input
        id="nines"
        type="checkbox"
        value={nines}
        onClick={() => setNines(prev => !prev)}
      />
      <label htmlFor="nines">Nines</label>
      <input
        id="eights"
        type="checkbox"
        value={eights}
        onClick={() => setEights(prev => !prev)}
      />
      <label htmlFor="eights">Eights</label>
      <input
        id="sevens"
        type="checkbox"
        value={sevens}
        onClick={() => setSevens(prev => !prev)}
      />
      <label htmlFor="sevens">Sevens</label>
      <input
        id="sixes"
        type="checkbox"
        value={sixes}
        onClick={() => setSixes(prev => !prev)}
      />
      <label htmlFor="sixes">Sixes</label>
      <input
        id="fives"
        type="checkbox"
        value={fives}
        onClick={() => setFives(prev => !prev)}
      />
      <label htmlFor="fives">Fives</label>
      <input
        id="fours"
        type="checkbox"
        value={fours}
        onClick={() => setFours(prev => !prev)}
      />
      <label htmlFor="fours">Fours</label>
      <input
        id="threes"
        type="checkbox"
        value={threes}
        onClick={() => setThrees(prev => !prev)}
      />
      <label htmlFor="threes">Threes</label>
      <input
        id="twos"
        type="checkbox"
        value={twos}
        onClick={() => setTwos(prev => !prev)}
      />
      <label htmlFor="twos">Twos</label>
      <input
        id="ones"
        type="checkbox"
        value={ones}
        onClick={() => setOnes(prev => !prev)}
      />
      <label htmlFor="ones">Ones</label>
      <br />
      <ToggleSwitch onClick={() => console.log("object")} />
      {/* </div> */}
      <Link to="/multiplay-to-nine">
        Lets learn multiplay to <span>nine</span>
      </Link>
      <br />
      <Link
        to="/gues-operation"
        state={{
          teachmode: `${ASK_ANSWERE}`,
          range: range,
        }}
      >
        Lets guess multiplay result
      </Link>
      <br />
      <Link
        to="/gues-operation"
        state={{
          teachmode: `${ASK_ARGUMENT}`,
          range: range,
        }}
      >
        Lets guess multiplay operands
      </Link>
      <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
