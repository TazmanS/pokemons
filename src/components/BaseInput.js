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
  width: 233px;
  height: 43px;
  border-radius: 5px;
  background-color: #eaebed;
  border: 2px solid #946c95;
  border-image: url('../frame.png') round round round;
  box-shadow: inset -2px -2px 5px rgba(0,0,0,0.9);
`

export default BaseInput