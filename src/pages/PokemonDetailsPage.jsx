import { useParams } from 'react-router-dom'

// "/pokemon/:name" — details + abilities (data comes in Checkpoint 2)
function PokemonDetailsPage() {
  const { name } = useParams()

  return (
    <main className='p-8'>
      <h1 className='text-3xl font-bold capitalize'>Pokémon: {name}</h1>
    </main>
  )
}

export default PokemonDetailsPage
