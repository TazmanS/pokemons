import React from 'react'
import styled from 'styled-components'

const BaseImg = ({pokemon}) => {
  return (
    <StyledContainer src={pokemon.url} alt={pokemon.name} />
  )
}

const StyledContainer = styled.img `
  max-width: 100vw;
  width: 300px;
`

export default BaseImg