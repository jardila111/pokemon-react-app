import { useEffect, useState } from 'react'
import { getPokemonList } from '../api/pokeapi'
import PokemonList from '../components/PokemonList'

// "/" — Pokémon list
function HomePage() {
  const [pokemonList, setPokemonList] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true)
        setErrorMessage('')
        const results = await getPokemonList(24)
        setPokemonList(results)
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }
    loadPokemon()
  }, [])

  return (
    <main className='p-8'>
      <h1 className='mb-6 text-3xl font-bold'>Pokédex</h1>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
      {!loading && !errorMessage && <PokemonList pokemonList={pokemonList} />}
    </main>
  )
}

export default HomePage
