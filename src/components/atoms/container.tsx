import styled from "styled-components"

const Container = styled.div<{maxWidth?: string}>`
  margin: 0px auto 20px;
  padding: 20px 20px 0px;
  max-width: ${props => (props.maxWidth || '1100px')};
`

export default Container