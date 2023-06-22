import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { QA } from "../data/Q&A";

const Faq = ({ question, answer }: QA) => {
  const [showAnswer, setSetshowAnswer] = useState(false);
  return (
    <div className="faq">
      <div className="question" onClick={() => setSetshowAnswer(!showAnswer)}>
        <span> {question}</span>
        {showAnswer ? <FaMinus /> : <FaPlus />}
      </div>
      {showAnswer && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Faq;
