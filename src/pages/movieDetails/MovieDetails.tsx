import "./MovieDetails.css"
import { movies } from "../../data/MovieData.ts"
import ErrorPage from "../errorPage/ErrorPage.tsx"
import { useParams } from "react-router"

export default function MovieDetails() {
  const { movieDetails } = useParams()
  if (!movieDetails) {
    return <ErrorPage />
  }

  const movieInfo = movies.find((movie) => movie.title.toLowerCase() === movieDetails)

  if (!movieInfo) {
    return <ErrorPage />
  }

  return (
    <>
      <section className="section_movie_details">
        <h2>{movieInfo.title}</h2>
        <div className="wrapper_movie_text_img">
          <div className="wrapper_movie_text">
            <div className="wrapper_movie_info">
              <p>
                Director: <span> {movieInfo.director}</span>
              </p>
              <p>
                Release year: <span>{movieInfo.year}</span>{" "}
              </p>
            </div>
            <div className="wrapper_movie_facts">
              <p>⏳ {movieInfo.duration}</p>
              <p>🎞️ {movieInfo.genre.join(", ")}</p>
              <p>⭐️ {movieInfo.rate}</p>
            </div>
          </div>
          <div className="wrapper_movie_img">
            <img src="https://picsum.photos/200/260" alt="Randoom Image" />
          </div>
        </div>
      </section>
    </>
  )
}
