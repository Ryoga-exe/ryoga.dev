import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "@emotion/styled"
import Logo from "@components/atoms/logo"
import "@styles/scroll-more.scss"
import Color from '@utils/color'

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