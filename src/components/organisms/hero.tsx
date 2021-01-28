import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components"
import Logo from "src/components/atoms/logo"
import "src/styles/scroll-more.scss"
import Color from 'src/utils/color'

const Base = styled.div`
  position: relative;
  width: 100%;
  height: min(max(25vw, 65vh), 100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: ${Color.bgAccent};
`

const Hero: React.FC = () => {
  return(
    <Base>
      <Logo fill="white" isHero={true}/>
      <div className="scroll-more" onClick={() => scrollTo('#aboutMe')}></div>
    </Base>
  );
}

export default Hero