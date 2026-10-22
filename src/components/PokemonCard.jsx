import { Link } from 'react-router-dom'
import { getSpriteUrl } from '../api/pokeapi'

// One card in the list: sprite + name, links to the details page
function PokemonCard({ name, id }) {
  return (
    <Link
      to={`/pokemon/${name}`}
      className='flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition-transform hover:scale-105 hover:shadow-lg'
    >
      <img src={getSpriteUrl(id)} alt={name} loading='lazy' className='h-24 w-24' />
      <span className='text-xs font-semibold text-gray-400'>#{String(id).padStart(3, '0')}</span>
      <h2 className='text-lg font-semibold capitalize'>{name}</h2>
    </Link>
  )
}

export default PokemonCard
