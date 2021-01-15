import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "src/components/atoms/logo"
import Container from "src/components/atoms/container"

const Base = styled.header`
  position: relative;
  width: 100%;
  background-color: #15171a;
`

const FlexBox = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ToTop = styled(Link)`
  display: inline-block;
`

const Header: React.FC = () => (
  <Base>
    <Container>
      <FlexBox>
        <ToTop to="/">
          <Logo width="150px" minWidth="100px" fill="white"/>
        </ToTop>
      </FlexBox>
    </Container>
  </Base>
)

export default Header