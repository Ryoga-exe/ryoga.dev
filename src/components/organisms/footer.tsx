import React from "react"
import styled from "styled-components";

const BaseFooter = styled.footer`
  
`

export const Footer: React.FC = () => (
  <BaseFooter>
    <small>
      © {new Date().getFullYear()} Ryoga.exe All rights reserved. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </small>
  </BaseFooter>
)

export default Footer;