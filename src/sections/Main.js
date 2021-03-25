import React from 'react'
import styled from 'styled-components'

const Main = ({children}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.main `
  margin-top: 10px;
  padding-bottom: 10px;
  background-color: #EAEBEDFF;
`

export default Main