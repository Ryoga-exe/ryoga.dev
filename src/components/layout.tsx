import React from "react"
import { Link } from "gatsby"
import Footer from "./organisms/footer"
import Container from "src/components/atoms/container"

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
        <Container>{children}</Container>
      }
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
