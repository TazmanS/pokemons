import React from 'react'
import styled from 'styled-components'

const BaseInput = ({value, change}) => {
  return (
    <StyledContainer value={value} onChange={change}/>
  )
}

const StyledContainer = styled.input `
  padding: 0 5px;
  outline: 0;
  outline-offset: 0;
  width: 243px;
  height: 43px;
  border-radius: 5px;
  background-color: #eaebed;
  border: 1.5px solid #946c95;
`

export default BaseInput