import React from "react"
import styled from "styled-components"
import Logo from "../atoms/logo"

import "../../styles/scroll-more.scss"

const Base = styled.div`
  width: 100%;
  height: min(max(28vw, 45vh), 100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: #15171a;
`

const Hero: React.FC = () => {
  /*
  const handleOnClick = () => {
    // Scroll
    // console.log("clicked");
  }
  */
  return(
    <Base>
      <Logo fill="white"/>
      {/*<div className="scroll-more" onClick={handleOnClick}><p>MORE</p></div>*/}
    </Base>
  );
}

export default Hero