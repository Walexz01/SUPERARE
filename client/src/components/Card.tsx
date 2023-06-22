import { nft_detail } from "../data/Nft_details";

const Card = ({ heading, body, image, className }: nft_detail) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__details">
        <div className="card__heading heading">{heading}</div>
        <p className="card__body">{body}</p>
      </div>

      <img src={image} className="card__image" alt="" />
    </div>
  );
};

export default Card;
