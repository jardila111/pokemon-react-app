import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonDetails } from '../api/pokeapi'

// "/pokemon/:name" — full details + abilities
function PokemonDetailsPage() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const loadDetails = async () => {
      try {
        setLoading(true)
        setErrorMessage('')
        const data = await getPokemonDetails(name)
        setPokemon(data)
      } catch (error) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }
    loadDetails()
  }, [name]) // re-fetch when the URL's :name changes

  return (
    <main className='p-8'>
      <Link to='/' className='text-blue-600 underline'>
        ← Back
      </Link>

      {loading && <p className='mt-4'>Loading...</p>}
      {errorMessage && <p className='mt-4 text-red-600'>{errorMessage}</p>}

      {!loading && !errorMessage && pokemon && (
        <section className='mt-4'>
          <h1 className='text-3xl font-bold capitalize'>
            {pokemon.name} <span className='text-gray-400'>#{pokemon.id}</span>
          </h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className='h-40 w-40'
          />

          {/* PokéAPI gives height in decimetres and weight in hectograms */}
          <p>Height: {pokemon.height / 10} m</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
          <p className='capitalize'>
            Types: {pokemon.types.map((t) => t.type.name).join(', ')}
          </p>

          <h2 className='mt-4 text-xl font-semibold'>Abilities</h2>
          <ul className='list-disc pl-6'>
            {pokemon.abilities.map((a) => (
              <li key={a.ability.name} className='capitalize'>
                {a.ability.name.replaceAll('-', ' ')}
                {a.is_hidden && <span className='text-gray-500'> (hidden)</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}

export default PokemonDetailsPage
