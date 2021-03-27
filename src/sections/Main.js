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
  padding-bottom: 50px;
  /* margin-bottom: 30px; */
  background-color: #EAEBEDFF;
  font-size: 29px;
  line-height: 31px;
  color: #000000;
  font-weight: 600;
  position: relative;
`

export default Main