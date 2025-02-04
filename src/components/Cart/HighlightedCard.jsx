const HighlightedCard = ({ title, description, icon, link }) => {
  return (
    <article className="bg-lacampana-white flex flex-col gap-4 p-8 text-start rounded-tl-2xl">
      <div className="flex items-center gap-2">
        <img className="w-12" src={icon} alt="" />
        <h5>{title}</h5>
      </div>
      <p>{description}</p>
      {link}
    </article>
  )
}

export default HighlightedCard