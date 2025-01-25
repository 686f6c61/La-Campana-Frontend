const FAQ = ({ questions }) => {
  return (
    <div className="max-w-[800px] w-full self-center flex flex-col gap-4">
      {questions.map(question =>
        <article key={`faq-item-${question.id}`} className="collapse collapse-arrow shadow-lg">
          <input type="radio" name="my-accordion-2" defaultChecked={question.id === 1} />
          <div className="collapse-title"><h4>{question.question}</h4></div>
          <div className="collapse-content bg-lacampana-white">
            <p>{question.answer}</p>
          </div>
        </article>
      )}
    </div>
  )
}

export default FAQ