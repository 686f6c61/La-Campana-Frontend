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
    <div className="max-w-[700px] w-full self-center flex flex-col gap-4 p-2">
      {questions.map((question) => {
        const isOpen = openId === question.id;

        return (
          <div
            key={question.id}
            className="transition-all bg-white font-antonio rounded-2xl"
          >
            <button
              onClick={() => toggle(question.id)}
              className={`w-full text-left text-base font-normal px-4 py-3 flex justify-between items-center ${
                isOpen
                  ? "bg-lacampana-red1 text-white rounded-2xl"
                  : "text-lacamapana-gray1"
              }`}
            >
              <span>{question.question}</span>
              <IoIosArrowDown
                className={`text-xl transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 text-white"
                    : "rotate-0 text-lacamapana-gray1"
                }`}
              />
            </button>

            <div
              ref={(el) => setRef(el, question.id)}
              style={{
                height: isOpen
                  ? `${contentRefs.current[question.id]?.scrollHeight}px`
                  : "0px",
              }}
              className="overflow-hidden transition-all duration-500 ease-in-out"
            >
              <div className="px-4 pt-3 pb-4 text-left font-open-sans space-y-2">
                {Array.isArray(question.answer) ? (
                  <div className="bg-lacampana-white text-black text-sm font-normal px-4 py-3 rounded-2xl transform md:-translate-x-5 -translate-x-2">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
