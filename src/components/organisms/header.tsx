import { Link, PageProps } from 'gatsby';
import React from 'react';

import Container from '@components/atoms/container';
import Logo from '@components/atoms/logo';
import styled from '@emotion/styled';
import Color from '@utils/color';
import { BreakPoint } from 'src/utils/breakPoint';

const Base = styled.header`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  z-index: 32;
  background-color: ${Color.bgAccent};
  box-shadow: 0px 0px 10px 0px #999;
`;

const FlexBox = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToPage = styled(Link)`
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Pages = styled.nav`
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
    transition: 0.3s;
    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: all 0.3s ease 0s;
    }
    &:hover::after {
      width: 100%;
    }
  }
  span {
    display: flex;
    align-items: center;
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

  @media (${BreakPoint.CSS.sp}) {
    display: none;
  }
`;

// ToDo: スマホのときメニューで開閉にする
const Header: React.FC<PageProps> = ({ location }) => {
  const menuItems = ['about', 'blog', 'works'];
  const locationName = location.pathname.slice(-1) == '/' ? location.pathname.slice(1).slice(0, -1) : location.pathname.slice(1);
  return (
    <Base>
      <Container>
        <FlexBox>
          <ToPage to='/'>
            <Logo width='150px' minWidth='100px' fill='white' />
          </ToPage>
          <Pages>
            {menuItems.map((item) => {
              const pageName = item.charAt(0).toUpperCase() + item.slice(1);
              return item == locationName ? <span>{pageName}</span> : <ToPage to={'/' + item}>{pageName}</ToPage>;
            })}
          </Pages>
        </FlexBox>
      </Container>
    </Base>
  );
};

export default Header;
