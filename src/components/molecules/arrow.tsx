import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const ArrowSize = 18;

const Animation = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-25px, 25px);
    opacity: 0;
  }
`

const Arrow = styled.span`
  width: 30px;
  height: 60px;
  display: block;
  position: absolute;
  bottom: 0;
  text-align: center;
  cursor: pointer;
  color: white;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 50%;
    width: ${ArrowSize}px;
    height: ${ArrowSize}px;
    margin-left: ${-ArrowSize / 2}px;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    transform: rotate(-45deg) translate(0, 0);
    animation: ${Animation} 1.5s infinite;
  }
`

export default Arrow