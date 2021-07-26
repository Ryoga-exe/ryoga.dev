import styled from "@emotion/styled"
import Color from '@utils/color'

const underlineHeight = "2px";
const accentWidth = "120px";

const Base = styled.span`

`

const H1 = styled(Base.withComponent('h1'))`
  font-size: 1.7rem;
  font-weight: 500;
  padding-left: 1.0rem;
  border-left: 5px solid ${Color.accent};
`

const H2 = styled(Base.withComponent('h2'))`
  text-transform: none;
  position: relative;
  font-size: 1.5rem;
  padding-bottom: 0.25em;
  margin-top: 2.0rem;
  margin-bottom: 1.5rem;
  border-bottom: ${underlineHeight} solid ${Color.underline};
  &::before {
    position: absolute;
    content: '';
    width: ${accentWidth};
    bottom: -${underlineHeight};
    height: ${underlineHeight};
    background-color: ${Color.accent};
  }
`

const H3 = styled(Base.withComponent('h3'))`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: none;
  &::after {
    margin-top: 5px;
    margin-bottom: 25px;
    content: '';
    display: block;
    height: 3px;
    background-color: ${Color.accent};
  }
`

const H4 = styled(Base.withComponent('h4'))`
  
`

const H5 = styled(Base.withComponent('h5'))`
  
`

const H6 = styled(Base.withComponent('h6'))`
  
`

const Heading = { H1, H2, H3, H4, H5, H6 };

export default Heading;