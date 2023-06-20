import relume from "../assets/relume.png";
import webflow from "../assets/webflow.png";
const Partners = () => {
  return (
    <section className="partners__section">
      <div className="container partners__container">
        <div className="heading partner__heading">Partners</div>
        <div className="partners__list">
          <img src={relume} alt="" />
          <img src={webflow} alt="" />
          <img src={relume} alt="" />
          <img src={webflow} alt="" />
          <img src={relume} alt="" />
          <img src={webflow} alt="" />
          <img src={relume} alt="" />
          <img src={webflow} alt="" />
          <img src={relume} alt="" />
          <img src={webflow} alt="" />
          <img src={relume} alt="" />
          <img src={webflow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
