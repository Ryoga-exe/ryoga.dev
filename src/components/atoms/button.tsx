import React from "react"
import { Link } from "gatsby"

import styled from "@emotion/styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Color from 'src/utils/color'

const Base = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 8px 50px;
  line-height: 1;
  margin-top: 30px;
  font-size: 1.00em;
  border-radius: 2px;
  color: ${Color.buttonText};
  
  background-color: ${Color.buttonBg};
  transition: 0.3s;
  > span {
    color: ${Color.buttonText};
    display: inline-block;
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    transition: 0.3s;
  }
  > svg {
    color: ${Color.buttonText};
    display: inline-block;
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    background-color: ${Color.buttonBgHoverd};
    transition: 0.3s;
    > span {
      
      transform: translateX(-5px);
      transition: 0.3s;
    }
    > svg {
      
      transform: translateX(5px);
      opacity: 1;
      transition: 0.3s;
    }
  }
`

type ButtonDetailProps = {
  txt : string;
  to  : string;
}

const ButtonDetail: React.FC<ButtonDetailProps> = ({ txt, to }) => (
  <Base to={to}>
    <span>{txt}</span>
    <FontAwesomeIcon icon={faArrowRight}/>
  </Base>
)

export default ButtonDetail;