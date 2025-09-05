import Header from "../../components/header/Header"
import "./Home.css"
import { movies } from "../../data/MovieData.ts"
import type { Movie } from "../../data/MovieData.ts"
import MovieCard from "../../components/movieCard/MovieCard.tsx"
import MovieBtn from "../../components/movieBtn/MovieBtn.tsx"
import { useState } from "react"

export default function Home() {
  const [listedMovies, setListedMovies] = useState<Movie[]>(movies)

  return (
    <>
      <Header listedMovies={listedMovies} setListedMovies={setListedMovies} />
      <section className="section_movie_list">
        {listedMovies.map((movie, index) => (
          <div key={index} className="movie_card">
            <MovieCard title={movie.title} year={movie.year} genre={movie.genre} rate={movie.rate} />
            <MovieBtn link={`/${movie.title.toLowerCase()}`} />
          </div>
        ))}
      </section>
    </>
  )
}
