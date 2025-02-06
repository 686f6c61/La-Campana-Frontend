const BannerDot = ({ id }) => {
  const handleDotClick = (slideID) => {
    const slideToGo = document.getElementById(slideID)
    if (slideToGo) {
      slideToGo.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  return (
    <input
      type="radio"
      name="radio-banner-home"
      onClick={() => handleDotClick(id)}
      className="radio w-3 h-3 checked:bg-lacampana-red1 checked:w-5 checked:h-5"
      defaultChecked={id === "item1"}
    />
  )
}

export default BannerDot