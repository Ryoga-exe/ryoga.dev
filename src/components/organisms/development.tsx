import React from "react"
import styled from "styled-components"

const Base = styled.div`
  position: fixed;
  top: 0;
  left 0;
  width: 100%;
  background-color: yellow;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
`

const Devlopment: React.FC = () => (
  <Base>
    このサイトは工事中です。/
    This site is not yet complete. (WIP)
  </Base>
)

export default Devlopment