import React from "react"
import styled from "styled-components"
import Logo from "../atoms/logo"

import "../../styles/scroll-more.scss"

const Base = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`

const Hero: React.FC = () => {
  const handleOnClick = () => {
    // Scroll
    // console.log("clicked");
  }
  return(
    <Base>

      <Logo />
      <div className="scroll-more" onClick={handleOnClick}><p>MORE</p></div>
    </Base>
  );
}

export default Hero