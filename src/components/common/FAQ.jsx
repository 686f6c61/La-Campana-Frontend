import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({ questions }) => {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const setRef = (el, id) => {
    if (el) contentRefs.current[id] = el;
  };

  return (
    <div className="max-w-3xl w-full mx-auto flex flex-col gap-4 p-4">
      {questions.map((question) => {
        const isOpen = openId === question.id;

        return (
          <div
            key={question.id}
            className={`overflow-hidden transition-all duration-300 rounded-2xl ${
              isOpen ? "" : "shadow-xl"
            } bg-white`}
          >
            {/* Botón título */}
            <button
              onClick={() => toggle(question.id)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center text-base font-antonio transition-colors duration-300 rounded-2xl ${
                isOpen
                  ? "bg-lacampana-red1 text-white"
                  : "text-lacampana-gray1 bg-white"
              }`}
            >
              <span>{question.question}</span>
              <IoIosArrowDown
                className={`text-2xl transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-white" : "rotate-0 text-lacampana-gray1"
                }`}
              />
            </button>

            {/* Contenido desplegable */}
            {isOpen && (
              <div className="px-6 pb-5 pt-2">
                <div className="bg-gray-100 text-gray text-sm font-antonio w-full px-6 py-4 flex justify-between  rounded-2xl text-left">
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
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
