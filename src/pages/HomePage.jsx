import { useEffect, useState } from 'react'
import { getPokemonList } from '../api/pokeapi'
import PokemonList from '../components/PokemonList'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

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

  if (loading) return <LoadingSpinner text='Loading Pokémon...' />
  if (errorMessage) return <ErrorMessage message={errorMessage} />

  return (
    <main className='mx-auto max-w-6xl p-4'>
      <h1 className='mb-1 text-3xl font-bold'>Pokédex</h1>
      <p className='mb-6 text-gray-500'>Pick a Pokémon to see its details and abilities.</p>
      <PokemonList pokemonList={pokemonList} />
    </main>
  )
}

export default HomePage
