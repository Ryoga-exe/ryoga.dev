import React from "react"
import Header from "src/components/organisms/header"
import Footer from "src/components/organisms/footer"
import Container from "src/components/atoms/container"

const Layout: React.FC<any> = ({ location, children }) => {
  const isIndex = location.pathname === `${__PATH_PREFIX__}/`;
  return (
    <React.Fragment>
      {isIndex ?
        <header></header>:
        <Header />
      }
      <main>
      {isIndex ?
        <div>{children}</div>:
        <Container>{children}</Container>
      }
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
