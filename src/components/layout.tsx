import React from "react"
import { Link } from "gatsby"

import Footer from "./organisms/footer"
import styled from "styled-components"

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 1100px;
  padding-top: 20px;
  margin-bottom: 20px;
`

const Layout: React.FC<any> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header;
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
      <header>{header}</header>
      {location.pathname === rootPath ?
        <main>{children}</main>:
        <Main>{children}</Main>
      }
      <Footer />
    </React.Fragment>
  )
}

export default Layout
