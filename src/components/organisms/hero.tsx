import React from "react"
import styled from "styled-components"
import Logo from "src/components/atoms/logo"
import "src/styles/scroll-more.scss"

const Base = styled.div`
  position: relative;
  width: 100%;
  height: min(max(25vw, 45vh), 100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: #15171a;
`

const Hero: React.FC = () => {
  const handleOnClick = () => {
    console.log("clicked");
    scrollTo('html')
  }
  return(
    <Base>
      <Logo fill="white"/>
      <div className="scroll-more" onClick={handleOnClick}></div>
    </Base>
  );
}

export default Hero