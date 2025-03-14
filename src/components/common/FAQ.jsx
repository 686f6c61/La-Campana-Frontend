import { useState } from "react";

const FAQ = ({ questions }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-[800px] w-full self-center flex flex-col gap-4 pt-2">
      {questions.map((question) => {
        const isOpen = openId === question.id;
        return (
          <div
            key={question.id}
            className={`shadow-lg rounded overflow-hidden transition-all ${
              isOpen ? "bg-lacampana-red1 text-white" : "bg-white text-lacamapana-gray1"
            }`}
          >
            <button
              onClick={() => toggle(question.id)}
              className="w-full text-left text-base font-normal px-4 py-3 flex justify-between items-center"
            >
              <span className="font-normal">{question.question}</span>
              <span className="text-sm font-normal">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div className="bg-lacampana-white text-black text-sm font-normal px-4 py-3 text-left font-open-sans">
                {Array.isArray(question.answer) ? (
                  <ul className="list-decimal list-inside space-y-1">
                    {question.answer.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{question.answer}</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
