import React from "react"
import { Link } from "gatsby"

import Footer from "./organisms/footer"
import styled from "styled-components"

const Main = styled.div`
  margin: 0px auto 20px;
  padding: 20px 20px 0px;
  max-width: 1100px;
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
      <main>
      {location.pathname === rootPath ?
        <div>{children}</div>:
        <Main>{children}</Main>
      }
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
