const Dot = ({ id, initStatus }) => {
  const handleClick = () => document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "nearest" })

  return (
    <input
      className="radio border-0 w-3 h-3 bg-lacampana-gray3 checked:bg-lacampana-red2 checked:w-5 checked:h-5"
      onClick={handleClick}
      name="radio-1"
      type="radio"
      defaultChecked={initStatus}
    />
  )
}

export default Dot