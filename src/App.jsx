import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/pokemon/:name' element={<PokemonDetailsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
