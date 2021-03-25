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
        <StyledText>Try “pikachu”, “charizard”, or “mew”</StyledText>
        <StyledSearch>
          <BaseInput value={search} change={onChange}/>
          <BaseButton click={onClick}>
            Submit
          </BaseButton>
        </StyledSearch>
        {err &&
        <StyledError>
          {err}
        </StyledError> 
        }
      </Header>
      <StyledLine></StyledLine>
      {pokemon.name.trim() &&
      <Main> 
        <BaseImg pokemon={pokemon}/>
        <StyledName>{name}</StyledName>
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
  margin: 35px auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const StyledTitle = styled.div`
  margin: 0;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  font-weight: 600;
` 

const StyledText = styled.div`
  font-size: 15px;
  line-height: 17px;
  color: #000000;
  font-weight: 600;
  margin: 7px 0 10px;
`

const StyledSearch = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledError = styled.div`
  color: red;
`

const StyledLine = styled.div`
  width: 339px;
  height: 2px;
  background-color: #d2dbde;
  border: 1px solid #d2dbde;
  margin: 22px 0 33px;
`

const StyledName = styled.div`
  font-size: 30px;
  line-height: 32px;
  color: #000000;
  font-weight: 800;
  margin-bottom: 20px;
`

export default App
