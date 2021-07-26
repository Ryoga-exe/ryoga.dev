import React from "react"
import SweetScroll from "sweet-scroll"
import Header from "@components/organisms/header"
import Footer from "@components/organisms/footer"
import Container from "@components/atoms/container"

new SweetScroll({
  trigger: "a.scroll[href^='#']",
});

const Layout: React.FC<any> = ({ location, children }) => {
  const isIndex = location.pathname === `${__PATH_PREFIX__}/`;
  return (
    <React.Fragment>
      {isIndex ?
        <header></header>:
        <Header location={location}/>
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
