import React from 'react'
import styled from 'styled-components'

const BaseButton = ({children, click, BGcolor = 'white'}) => {
  return (
    <StyledContainer onClick={click} BGcolor={BGcolor}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.button `
  background-color: ${({BGcolor}) => BGcolor};
  border-radius: 5px;
  border: 1px solid black;
`

export default BaseButton