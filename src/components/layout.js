import React from "react"
import { Link } from "gatsby"

import Footer from "./organisms/footer"
import Dev from "./organisms/development"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div></div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <Dev />
        <header>{header}</header>
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
