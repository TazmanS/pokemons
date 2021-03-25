import React from 'react'
import styled from 'styled-components'

const BaseButton = ({children, click}) => {
  return (
    <StyledContainer onClick={click}>
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.button `
  background-color: #b3281a;
  border-radius: 5px;
  border: 1px solid black;
  width: 85px;
  height: 40px;
  font-size: 17px;
  line-height: 18px;
  color: #ffffff;
  font-weight: 600;
  filter: drop-shadow(0.866px 0.5px 0.5px rgba(5,6,4,0.59));
`

export default BaseButton