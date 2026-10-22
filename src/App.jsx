import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon/:name' element={<PokemonDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
