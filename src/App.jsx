import { Routes, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  )
}

export default App

