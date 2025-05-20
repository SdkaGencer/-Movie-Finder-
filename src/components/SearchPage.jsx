import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const API_KEY = '6c6e0e02'

  useEffect(() => {
    if (searchTerm.trim().length < 3) return

    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
        const data = await response.json()

        if (data.Response === 'True') {
          setMovies(data.Search)
        } else {
          setMovies([])
        }
      } catch (error) {
        console.error('Hata:', error)
      }
    }

    fetchMovies()
  }, [searchTerm])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="app-container">
      <h1>🎬 Movie Finder</h1>
      <SearchBar value={searchTerm} onChange={handleChange} />

      {searchTerm.length >= 3 && movies.length === 0 && <p>Hiçbir film bulunamadı 🥲</p>}

      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage
