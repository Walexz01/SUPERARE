import Card from "./Card";
import { nft_details } from "../data/Nft_details";

const Nft_details = () => {
  return (
    <section className="nft__details__section">
      <div className="container nft__details__container">
        {nft_details.map(({ heading, body, image, className }, index) => (
          <Card
            body={body}
            className={className}
            heading={heading}
            image={image}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Nft_details;
