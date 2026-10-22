import { Link } from 'react-router-dom'
import { getSpriteUrl } from '../api/pokeapi'

// One card in the list: sprite + name, links to the details page
function PokemonCard({ name, id }) {
  return (
    <Link
      to={`/pokemon/${name}`}
      className='flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4'
    >
      <img src={getSpriteUrl(id)} alt={name} className='h-24 w-24' />
      <span className='text-xs text-gray-400'>#{id}</span>
      <h2 className='font-semibold capitalize'>{name}</h2>
    </Link>
  )
}

export default PokemonCard
