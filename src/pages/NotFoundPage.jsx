import { Link } from 'react-router-dom'

// "*" — catch-all for unknown URLs
function NotFoundPage() {
  return (
    <main className='p-8'>
      <h1 className='text-3xl font-bold'>404 - Page Not Found</h1>
      <Link to='/' className='text-blue-600 underline'>
        Back to Home
      </Link>
    </main>
  )
}

export default NotFoundPage
