import "./FilterBtn.css"

interface FilterBtnProps {
  id: string
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function FilterBtn(props: FilterBtnProps) {
  return (
    <>
      <button type="button" className="filter_btn" id={props.id} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}
