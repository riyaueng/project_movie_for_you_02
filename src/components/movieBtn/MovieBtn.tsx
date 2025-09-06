import "./MovieBtn.css"
import { Link } from "react-router"

interface MovieBtnProps {
  link: string
}

export default function MovieBtn(props: MovieBtnProps) {
  return (
    <>
      <div className="moviecard_btn">
        <Link to={props.link} className="btn_link">
          Movie details
        </Link>
      </div>
    </>
  )
}
