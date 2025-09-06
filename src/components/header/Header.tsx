import { useEffect, useState } from "react"
import FilterBtn from "../filterBtn/FilterBtn"
import "./Header.css"
import movies, { type Movie } from "../../data/MovieData"

interface HeaderProps {
  listedMovies: Movie[]
  setListedMovies: React.Dispatch<React.SetStateAction<Movie[]>>
}

// ------- Zwischengelagerte Filter-Funktionen --------
const compareYearDown = (movieA: Movie, movieB: Movie) => {
  return Number(movieB.year) - Number(movieA.year)
}
const compareYearUp = (movieA: Movie, movieB: Movie) => Number(movieA.year) - Number(movieB.year)
const compareBestRate = (movieA: Movie, movieB: Movie) => Number(movieB.rate) - Number(movieA.rate)
const compareAZ = (movieA: Movie, movieB: Movie) => movieA.title.localeCompare(movieB.title)
const compareZA = (movieA: Movie, movieB: Movie) => movieB.title.localeCompare(movieA.title)

export default function Header(props: HeaderProps) {
  const [searchMovie, setSearchMovie] = useState<string>("")
  const [sortFunction, setSortFunction] = useState<(movieA: Movie, movieB: Movie) => number>(() => compareYearDown)

  // ------- Zwischengelagerte Filter übergeben und mit Setter anwenden --------
  const listYearDown = () => {
    setSortFunction(() => compareYearDown)
  }
  const listYearUp = () => {
    setSortFunction(() => compareYearUp)
  }
  const listBestRate = () => {
    setSortFunction(() => compareBestRate)
  }
  const listAZ = () => {
    setSortFunction(() => compareAZ)
  }

  const listZA = () => {
    setSortFunction(() => compareZA)
  }

  useEffect(() => {
    const movieResult = movies.filter((movie) => movie.title.toLowerCase().includes(searchMovie.toLowerCase()))
    const sortedMovieResult = movieResult.sort(sortFunction)
    props.setListedMovies(sortedMovieResult)
  }, [searchMovie, sortFunction])

  return (
    <>
      <header>
        <section className="section_headline">
          <h1>Movies for You</h1>
          <p>The best MovieDB</p>
        </section>

        <section className="section_filter">
          <div className="div_search_field">
            <input
              type="text"
              id="input_text"
              onChange={(event) => setSearchMovie(event.target.value)}
              placeholder="Search for a movie"
            />
            {/* <button type="button" id="btn_search">
              Search
            </button> */}
          </div>

          <div className="div_filter_btn">
            <FilterBtn id="year_up" text="Year Up" onClick={listYearDown} />
            <FilterBtn id="year_down" text="Year Down" onClick={listYearUp} />
            <FilterBtn id="best_rate" text="Best rate" onClick={listBestRate} />
            <FilterBtn id="a-z" text="A-Z" onClick={listAZ} />
            <FilterBtn id="z-a" text="Z-A" onClick={listZA} />

            {/* Genre besser mit Select Options filtern! */}
            {/* <FilterBtn id="genre" text="Genre" /> */}
          </div>
        </section>
      </header>
    </>
  )
}
