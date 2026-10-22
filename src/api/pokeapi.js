const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
const SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

// GET /pokemon?limit=24 -> [{ name, url }]
export async function getPokemonList(limit = 24) {
  const response = await fetch(`${BASE_URL}?limit=${limit}`)
  if (!response.ok) throw new Error('Failed to load Pokémon list')
  const data = await response.json()
  return data.results
}

// GET /pokemon/{name} -> full record (sprites, types, abilities, ...)
export async function getPokemonDetails(name) {
  const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`)
  if (!response.ok) throw new Error(`Failed to load details for "${name}"`)
  return response.json()
}

// "https://pokeapi.co/api/v2/pokemon/25/" -> "25"
export function getPokemonIdFromUrl(url) {
  return url.split('/').filter(Boolean).pop()
}

// Builds the sprite image URL from an id, so the list needs no extra fetches
export function getSpriteUrl(id) {
  return `${SPRITE_URL}/${id}.png`
}
