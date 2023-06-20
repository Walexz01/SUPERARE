import heroImage from "../assets/Screenshot 2023-06-19 210553.png";
const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container hero__container two_to_1__grid">
        <div className="hero__section--left">
          <div className="left__content">
            <h2>
              <span className="colored__text">Discover and </span>collect
              superare NFTs
            </h2>
            <p>
              Digital marketplace for crypto collectibles and NFTs.Buy,Sell and
              discover exclusivedigital assets today
            </p>
            <div className="ctn__group">
              <button className="btn buy_now">Buy Now</button>
              <button className="btn connect">Connect Wallet</button>
            </div>
          </div>
        </div>
        <div className="hero__section--right">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
