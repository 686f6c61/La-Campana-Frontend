import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({ questions }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-[800px] w-full self-center flex flex-col gap-4 p-2">
      {questions.map((question) => {
        const isOpen = openId === question.id;
        return (
          <div key={question.id} className="overflow-hidden transition-all bg-white font-antonio">

            <button
  onClick={() => toggle(question.id)}
  className={`w-full text-left text-base font-normal px-4 py-3 flex justify-between items-center ${
    isOpen ? "bg-lacampana-red1 text-white rounded-2xl" : "text-lacamapana-gray1"
  }`}
>

              <span className="font-normal">{question.question}</span>
              <IoIosArrowDown
  className={`text-xl transition-transform duration-300 ${
    isOpen ? "rotate-180 text-white" : "rotate-0 text-lacamapana-gray1"
  }`}
/>

            </button>

            {/* {isOpen && (
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
            )} */}

{isOpen && (
  <div className="px-4 pt-3 pb-4 text-left font-open-sans space-y-2">
    {/* Título rojo separado */}
    {/* <div className="bg-lacampana-red1 text-white text-base font-antonio px-4 py-2 rounded-tl-2xl rounded-tr-2xl w-fit shadow">
      {question.question}
    </div> */}


    {/* Respuesta: lista o párrafo */}
    {Array.isArray(question.answer) ? (
      <div className="bg-lacampana-white   text-black text-sm font-normal px-4 py-3 rounded-2xl md:transform -translate-x-5 transform -translate-x-2">
        <ul className="list-decimal list-inside space-y-1">
          {question.answer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="bg-lacampana-white text-black text-sm font-normal px-4 py-3 rounded-b-2xl">
        <p>{question.answer}</p>
      </div>
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
