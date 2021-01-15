import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "src/components/atoms/logo"
import Container from "src/components/atoms/container"

const Base = styled.header`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  z-index: 32;
  background-color: #15171a;
  box-shadow: 0px 0px 10px 0px #999;
`

const FlexBox = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ToPage = styled(Link)`
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
`

const Pages = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  > a {
    font-size: 18px;
    margin-left: 7px;
    color: white;
    text-decoration: none;
    &:hover {

    }
  }
`

// ToDo: 今いるページをlocationを使って薄く表示&リンクを踏めないように
// ToDo: スマホのときメニューで開閉にする
const Header: React.FC = () => (
  <Base>
    <Container>
      <FlexBox>
        <ToPage to="/">
          <Logo width="150px" minWidth="100px" fill="white"/>
        </ToPage>
        <Pages>
          <ToPage to="/about">About</ToPage>
          <ToPage to="/blog">Blog</ToPage>
          <ToPage to="/works">Works</ToPage>
        </Pages>
      </FlexBox>
    </Container>
  </Base>
)

export default Header