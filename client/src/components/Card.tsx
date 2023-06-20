interface Props {
  heading: string;
  body: string;
  image: string;
  className: string;
}

const Card = ({ heading, body, image, className }: Props) => {
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
