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

export const Hero: React.FC = () => (
  <Base>

    <Logo />
    <div className="scroll-more"><p>MORE</p></div>
  </Base>
)

export default Hero