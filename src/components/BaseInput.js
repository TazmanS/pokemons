import React from 'react'
import styled from 'styled-components'

const BaseInput = ({value, change}) => {
  return (
    <StyledContainer value={value} onChange={change}/>
  )
}

const StyledContainer = styled.input `
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid black;
  outline: 0;
  outline-offset: 0;
`

export default BaseInput