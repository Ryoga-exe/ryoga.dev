import React from "react"

export const Footer: React.FC = () => (
  <footer>
    <small>
      © {new Date().getFullYear()} Ryoga.exe All rights reserved. Built with<a href="https://www.gatsbyjs.org">Gatsby</a>
    </small>
  </footer>
)

export default Footer;