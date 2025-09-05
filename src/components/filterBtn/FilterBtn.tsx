import "./FilterBtn.css"

interface FilterBtnProps {
  id: string
  text: string
}

export default function FilterBtn(props: FilterBtnProps) {
  return (
    <>
      <button type="button" id={props.id}>
        {props.text}
      </button>
    </>
  )
}
