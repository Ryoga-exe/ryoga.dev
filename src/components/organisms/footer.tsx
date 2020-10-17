import React from "react"
import styled from "styled-components";
import Container from "src/components/atoms/container"

const BaseFooter = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-top: 25px;
  padding-bottom: 50px;
  background-color: #15171a;
`

const FotterSmall = styled.small`
  display: inline;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.7);
  > a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgba(255, 255, 255, 1.0);
    }
  }
  @media (max-width: 751px){
    display: block;
  }
`

const Footer: React.FC = () => {
  const setyaer:number = 2020, year = new Date().getFullYear();
  return (
    <BaseFooter>
      <Container>
        <FotterSmall>
          © { setyaer + (year == setyaer ? "" : "-" + year)} Ryoga.exe All rights reserved. 
        </FotterSmall>
        <FotterSmall>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FotterSmall>
        </Container>
    </BaseFooter>
  )
}

export default Footer;