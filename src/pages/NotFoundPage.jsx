import { Link } from 'react-router-dom'

// "*" — catch-all for unknown URLs
function NotFoundPage() {
  return (
    <main className='mx-auto max-w-md p-4 py-20 text-center'>
      <p className='text-6xl font-bold text-red-500'>404</p>
      <h1 className='mt-2 mb-4 text-2xl font-bold'>Page Not Found</h1>
      <p className='mb-6 text-gray-500'>This page doesn't exist.</p>
      <Link
        to='/'
        className='inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Back to Pokédex
      </Link>
    </main>
  )
}

export default NotFoundPage
