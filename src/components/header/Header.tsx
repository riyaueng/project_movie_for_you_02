import FilterBtn from "../filterBtn/FilterBtn"
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        <section className="section_headline">
          <h1>Movies for You</h1>
          <p>The best MovieDB</p>
        </section>

        <section className="section_filter">
          <div className="div_search_field">
            <input type="text" id="input_text" />
            <button type="button" id="btn_search">
              Search
            </button>
          </div>

          <div className="div_filter_btn">
            <FilterBtn id="year_up" text="Year Up" />
            <FilterBtn id="year_down" text="Year Down" />
            <FilterBtn id="best_rate" text="Best rate" />
            <FilterBtn id="a-z" text="A-Z" />
            <FilterBtn id="z-a" text="Z-A" />
            <FilterBtn id="genre" text="Genre" />
          </div>
        </section>
      </header>
    </>
  )
}
