import { Link } from 'react-router-dom'

// App header, shown on every page (imported once in App.jsx)
function NavBar() {
  return (
    <header className='bg-red-500 shadow-md'>
      <nav className='mx-auto flex max-w-6xl items-center gap-3 px-4 py-3'>
        <Link to='/' className='flex items-center gap-2 text-xl font-bold text-white'>
          <img src='/favicon.svg' alt='' className='h-8 w-8' />
          Pokédex
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
