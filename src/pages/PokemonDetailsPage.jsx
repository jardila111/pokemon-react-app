import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonDetails } from '../api/pokeapi'
import AbilityBadge from '../components/AbilityBadge'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { defaultTypeColor, typeColors } from '../constants/typeColors'

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

  if (loading) return <LoadingSpinner text={`Loading ${name}...`} />
  if (errorMessage) return <ErrorMessage message={errorMessage} />
  if (!pokemon) return null

  // Bigger official artwork when available, small sprite as a fallback
  const image =
    pokemon.sprites.other?.['official-artwork']?.front_default ||
    pokemon.sprites.front_default

  return (
    <main className='mx-auto max-w-3xl p-4'>
      <Link
        to='/'
        className='inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        ← Back
      </Link>

      <section className='mt-6 flex flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-md sm:flex-row sm:items-start'>
        <img src={image} alt={pokemon.name} className='h-48 w-48 shrink-0 rounded-xl bg-gray-100' />

        <div className='w-full'>
          <p className='text-sm font-semibold text-gray-400'>
            #{String(pokemon.id).padStart(3, '0')}
          </p>
          <h1 className='mb-3 text-3xl font-bold capitalize'>{pokemon.name}</h1>

          <div className='mb-4 flex flex-wrap gap-2'>
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className={`rounded-full px-3 py-1 text-sm font-semibold capitalize ${typeColors[t.type.name] || defaultTypeColor}`}
              >
                {t.type.name}
              </span>
            ))}
          </div>

          {/* PokéAPI gives height in decimetres and weight in hectograms */}
          <dl className='mb-4 grid grid-cols-2 gap-3'>
            <div className='rounded-lg bg-gray-50 p-3'>
              <dt className='text-xs uppercase text-gray-500'>Height</dt>
              <dd className='text-lg font-semibold'>{pokemon.height / 10} m</dd>
            </div>
            <div className='rounded-lg bg-gray-50 p-3'>
              <dt className='text-xs uppercase text-gray-500'>Weight</dt>
              <dd className='text-lg font-semibold'>{pokemon.weight / 10} kg</dd>
            </div>
          </dl>

          <h2 className='mb-2 text-xl font-semibold'>Abilities</h2>
          <div>
            {pokemon.abilities.map((a) => (
              <AbilityBadge key={a.ability.name} name={a.ability.name} isHidden={a.is_hidden} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PokemonDetailsPage
