import styled from "@emotion/styled"
import Color from 'src/utils/color'

const underlineHeight = "2px";
const accentWidth = "120px";

const Base = styled.span`

`

const H1 = styled(Base.withComponent('h1'))`
  
`

const H2 = styled(Base.withComponent('h2'))`
  text-transform: none;
  position: relative;
  font-size: 1.3rem;
  padding-bottom: 0.25em;
  margin-top: 2.0rem;
  margin-bottom: 1.5rem;
  border-bottom: ${underlineHeight} solid ${Color.underline};
  &::before {
  position: absolute;
  content: " ";
  width: ${accentWidth};
  bottom: -${underlineHeight};
  height: ${underlineHeight};
  background-color: ${Color.accent};
}
`

const H3 = styled(Base.withComponent('h3'))`
  
`

const H4 = styled(Base.withComponent('h4'))`
  
`

const H5 = styled(Base.withComponent('h5'))`
  
`

const H6 = styled(Base.withComponent('h6'))`
  
`

export default { H1, H2, H3, H4, H5, H6 };