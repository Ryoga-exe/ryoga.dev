import styled from "@emotion/styled"

const Container = styled.div<{maxWidth?: string, margin?: string, padding?: string}>`
  margin:    ${props => (props.margin   || '0 auto')};
  padding:   ${props => (props.padding  || '0 4vw')};
  max-width: ${props => (props.maxWidth || '1120px')};
`

export default Container