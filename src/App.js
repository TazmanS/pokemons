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
    order: '',
    fetchedAt: '',
    id: null,
  })

  const formatDate = date => `
    ${date.getHours()}:${String(date.getMinutes())
      .padStart(2, '0')} ${String(date.getSeconds(),)
      .padStart(2, '0')}.${String(date.getMilliseconds())
      .padStart(3, '0')}`

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
      console.log(response)
      setPokemon({
        name: search,
        url: response.data.sprites.other['official-artwork'].front_default,
        experience:  response.data['base_experience'],
        height:  response.data.height,
        wieght:  response.data.weight,
        order:  response.data.order,
        fetchedAt: formatDate(new Date()),
        id: response.data.id
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
        <StyledNumber>{pokemon.fetchedAt}</StyledNumber>
        <BaseImg pokemon={pokemon}/>
        <StyledName>{name}<sup>{pokemon.id}</sup></StyledName>
        <StyledList>
          <li>Experience: {pokemon.experience}</li>
          <li>Height: {pokemon.height}</li>
          <li>Wieght: {pokemon.wieght}</li>
          <li>Order: {pokemon.order}</li>
        </StyledList>
      </Main>
      }
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0px auto;
  padding: 34px 0;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  border: 1px solid black;
  box-sizing: border-box;
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
  margin: 1px 0 15px;
`

const StyledSearch = styled.div`
  margin-top: 5px;
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledError = styled.div`
  color: red;
`

const StyledLine = styled.div`
  width: 339px;
  height: 0px;
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

const StyledNumber = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
  line-height: 16px;
  color: #000000;
  font-weight: 600;
`

const StyledList = styled.ul `
  display: flex;
  flex-direction: column;
  margin-left: 36px;
  padding-right: 36px;
  text-align: left;

  li{
    padding: 0 5px;
  }

  li::marker{
    font-size: 20px;
  }
`

export default App
