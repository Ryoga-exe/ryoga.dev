import React from "react"
import styled from "styled-components";

const BaseFooter = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: #15171a;
`

const FotterSmall = styled.small`
  display: inline;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.7);
  > a {
    text-decoration: none;
    color: white;
    opacity: 0.7;
    &:hover {
      opacity: 1.0;
    }
  }
  @media (max-width: 751px){
    display: block;
  }
`

const Footer: React.FC = () => {
  const setyaer:number = 2020;
  return (
    <BaseFooter>
      <FotterSmall>
        © {new Date().getFullYear() == setyaer ? setyaer : setyaer+"-" + new Date().getFullYear()} Ryoga.exe All rights reserved. 
      </FotterSmall>
      <FotterSmall>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </FotterSmall>
    </BaseFooter>
  )
}

export default Footer;