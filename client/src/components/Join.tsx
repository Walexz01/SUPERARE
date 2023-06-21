import image from "../assets/Group 350.png";

const Join = () => {
  return (
    <section className="join__section">
      <div className="container join__container two_to_1__grid">
        <div className="join__left">
          <h2>Join the community</h2>
          <p>
            Digital marketplace for crypto collectibles and NFTs. Buy, Sell, and
            discover exclusive digital assets today.
          </p>
          <div className="btn__group">
            <button className="btn">Jion Dicord</button>
            <button className="btn connect">Follow on twitter</button>
          </div>
        </div>
        <div className="join__right">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Join;
