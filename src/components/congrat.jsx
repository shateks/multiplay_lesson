import React from "react"
import { useIntl } from "gatsby-plugin-intl"

export default function Congrat() {
  const intl = useIntl()
  return (
    <article className="congrat">
      <h1>{intl.formatMessage({ id: "congratulation" })}</h1>
    </article>
  )
}
