import React from "react"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Base = styled.span<{hoverColor?: string, cursor?: string}>`
  cursor: ${props => (props.cursor || 'initial')};
  transition: 0.2s;
  &:hover {
    color: ${props => (props.hoverColor || 'initial')};
    transition: 0.2s;
  }
`

type IconProps = {
  icon?: any;
  hover?: string;
  cursor?: string;
}

const Icon: React.FC<IconProps> = ({icon, hover, cursor}) => (
  <Base hoverColor={hover} cursor={cursor}>
    <FontAwesomeIcon icon={icon}/>
  </Base>
)

export default Icon;