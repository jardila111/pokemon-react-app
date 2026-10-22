import { Link } from 'react-router-dom'

// Shown when a fetch fails (network error or unknown Pokémon)
function ErrorMessage({ message }) {
  return (
    <div className='mx-auto my-12 max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center'>
      <h2 className='mb-2 text-xl font-bold text-red-700'>Something went wrong</h2>
      <p className='mb-4 text-red-600'>{message}</p>
      <Link
        to='/'
        className='inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Back to Pokédex
      </Link>
    </div>
  )
}

export default ErrorMessage
