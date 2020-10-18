import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components"
import Logo from "src/components/atoms/logo"
import "src/styles/scroll-more.scss"

const Base = styled.div`
  position: relative;
  width: 100%;
  height: min(max(25vw, 65vh), 100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: #15171a;
`

const Hero: React.FC = () => {
  return(
    <Base>
      <Logo fill="white"/>
      <div className="scroll-more" onClick={() => scrollTo('#main')}></div>
    </Base>
  );
}

export default Hero