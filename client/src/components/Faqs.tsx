import { QAs } from "../data/Q&A";
import Faq from "./Faq";

const Faqs = () => {
  return (
    <section className="faqs__section">
      <div className="container faqs__container">
        <div className="heading faq__heading">
          Your questions,
          <br />
          answered.
        </div>
        <div className="faqs">
          {QAs.map(({ question, answer }, index) => (
            <Faq question={question} answer={answer} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
