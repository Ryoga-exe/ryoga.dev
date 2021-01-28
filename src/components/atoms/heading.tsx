import styled from "styled-components"

const Base = styled.span`

`

const H1 = styled(Base.withComponent('h1'))`
  
`

const H2 = styled(Base.withComponent('h2'))`
  
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