import React, {useState} from 'react'
import Header from './sections/Header'
import Main from './sections/Main'
import BaseInput from './components/BaseInput'
import BaseButton from './components/BaseButton'
import BaseImg from './components/BaseImg'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState({
    name: '',
    url: ''
  })

  const onChange = (event) => {
    setName(event.target.value)
  }

  const onClick = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    setPokemon({
      name: name,
      url: response.data.sprites.other['official-artwork'].front_default
    })
    setName('')
  }

  return (
    <div>
      <Header>
        <h1>Pokemon Name</h1>
        <div>Try “pikachu”, “charizard”, or “mew”</div>
        <div>
          <BaseInput value={name} change={onChange}/>
          <BaseButton click={onClick}>
            Submit
          </BaseButton>
        </div>
      </Header>
      <Main>
        <BaseImg pokemon={pokemon}/>
      </Main>
    </div>
  )
}

export default App
