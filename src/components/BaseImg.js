import React from 'react'
import styled from 'styled-components'

const BaseImg = ({pokemon}) => {
  return (
    <StyledContainer src={pokemon.url} alt={pokemon.name} />
  )
}

const StyledContainer = styled.img `
  max-width: 100vw;
  width: 263px;
  height: 223px;
  margin: 37px;
  margin-bottom: 16px;
`

export default BaseImg