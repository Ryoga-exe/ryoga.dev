import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "src/components/atoms/logo"
import Container from "src/components/atoms/container"
import Color from 'src/utils/color'

const Base = styled.header`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  z-index: 32;
  background-color: ${Color.bgAccent};
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
  a {
    height: 65%;
    position: relative;
    font-size: 17px;
    margin-left: 20px;
    color: white;
    text-decoration: none;
    transition: .3s;
    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: all .3s ease 0s;
    }
    &:hover::after {
      width: 100%;
    }
  }
  p {
    height: 65%;
    position: relative;
    font-size: 17px;
    margin-left: 20px;
    color: white;
    opacity: 0.7;
    text-decoration: none;
    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: white;
    }
  }
`

// ToDo: スマホのときメニューで開閉にする
const Header: React.FC<any> = ({ location }) => {
  const menuItems = ['about', 'blog', 'works'];
  const locationName = 
    location.pathname.slice(-1) == '/' ?
    location.pathname.slice(1).slice(0, -1) :
    location.pathname.slice(1);
  return (
    <Base>
      <Container>
        <FlexBox>
          <ToPage to="/">
            <Logo width="150px" minWidth="100px" fill="white"/>
          </ToPage>
          <Pages>
            {menuItems.map((item) => {
              const pageName = item.charAt(0).toUpperCase() + item.slice(1);
              return (item == locationName ?
              <p>{pageName}</p> :
              <ToPage to={'/'+item}>{pageName}</ToPage>)
            })}
          </Pages>
        </FlexBox>
      </Container>
    </Base>
  )
}

export default Header