import "./MovieCard.css"

interface MovieCardProps {
  title: string
  year: string
  genre: string[]
  rate: string
}

export default function MovieCard(props: MovieCardProps) {
  return (
    <>
      <div className="wrapper_moviecard_info">
        <h3>{props.title}</h3>
        <div className="movie_info">
          <p>🗓️ {props.year}</p>
          <p>🎞️ {props.genre.join(", ")}</p>
          <p>⭐️ {props.rate}</p>
        </div>
      </div>
    </>
  )
}
