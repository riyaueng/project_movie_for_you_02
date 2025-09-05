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
      <h3>{props.title}</h3>
      <div className="movie_info">
        <p>Release year: {props.year}</p>
        <p>🎞️ {props.genre}</p>
        <p>⭐️ {props.rate}</p>
      </div>
    </>
  )
}
