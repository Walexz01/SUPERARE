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
          <Faq
            question="What is an NFT"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem consequatur reprehenderit perspiciatis tempora ad iure veniam eligendi iusto alias."
          />
          <Faq
            question="What is an NFT"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem consequatur reprehenderit perspiciatis tempora ad iure veniam eligendi iusto alias."
          />
          <Faq
            question="What is an NFT"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem consequatur reprehenderit perspiciatis tempora ad iure veniam eligendi iusto alias."
          />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
