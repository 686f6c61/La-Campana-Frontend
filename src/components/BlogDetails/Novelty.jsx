const Novelty = ({ noveltyItems }) => {
  return (
    <section className="text-start flex flex-col gap-4">
      <h4>Novedades</h4>
      <ul>
        {noveltyItems.map(novelty =>
          <li key={`news-category-${novelty.id}`}>{novelty.name}</li>
        )}
      </ul>
    </section>
  )
}

export default Novelty