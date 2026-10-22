import PokemonCard from './PokemonCard'
import { getPokemonIdFromUrl } from '../api/pokeapi'

// Maps the fetched array to <PokemonCard> components
function PokemonList({ pokemonList }) {
  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          id={getPokemonIdFromUrl(pokemon.url)}
        />
      ))}
    </div>
  )
}

export default PokemonList
