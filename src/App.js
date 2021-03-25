import React, {useState} from 'react'
import styled from 'styled-components'
import Header from './sections/Header'
import Main from './sections/Main'
import BaseInput from './components/BaseInput'
import BaseButton from './components/BaseButton'
import BaseImg from './components/BaseImg'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [err, setErr] = useState('')
  const [pokemon, setPokemon] = useState({
    name: '',
    url: '',
    experience: '',
    height: '',
    wieght: '',
    order: ''
  })

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  const onClick = async () => {
    if(!search.trim()){
      setErr("Empty name")
      return false
    }
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      setPokemon({
        name: search,
        url: response.data.sprites.other['official-artwork'].front_default,
        experience:  response.data['base_experience'],
        height:  response.data.height,
        wieght:  response.data.weight,
        order:  response.data.order
      })
      setName(search[0].toUpperCase() + search.slice(1) )
      setSearch('')
      setErr('')
    } catch(e) {
      console.log(e)
      setSearch('')
      setErr('Pokemon not found')
    }
  }

  return (
    <StyledContainer>
      <Header>
        <StyledTitle>{name ? name : 'Pokemon Name'}</StyledTitle>
        <div>Try “pikachu”, “charizard”, or “mew”</div>
        <StyledSearch>
          <BaseInput value={search} change={onChange}/>
          <BaseButton click={onClick} BGcolor={'#EAEBEDFF'}>
            Submit
          </BaseButton>
        </StyledSearch>
        {err &&
        <StyledError>
          {err}
        </StyledError> 
        }
      </Header>
      {pokemon.name.trim() &&
      <Main> 
        <BaseImg pokemon={pokemon}/>
        <div>Experience: {pokemon.experience}</div>
        <div>Height: {pokemon.height}</div>
        <div>Wieght: {pokemon.wieght}</div>
        <div>Order: {pokemon.order}</div>
      </Main>
      }
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 25px auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const StyledTitle = styled.h1`
  margin: 0;
` 

const StyledSearch = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 5px;
`

const StyledError = styled.div`
  color: red;
`

export default App
