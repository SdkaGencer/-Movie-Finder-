import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const API_KEY = '6c6e0e02'

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      const data = await res.json()
      setMovie(data)
    }

    fetchMovie()
  }, [id])

  if (!movie) return <p>Yükleniyor...</p>

  return (
    <div className="app-container">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Yıl:</strong> {movie.Year}</p>
      <p><strong>Tür:</strong> {movie.Genre}</p>
      <p><strong>Yönetmen:</strong> {movie.Director}</p>
      <p><strong>Açıklama:</strong> {movie.Plot}</p>

      <Link to="/">← Geri dön</Link>
    </div>
  )
}

export default MovieDetail
