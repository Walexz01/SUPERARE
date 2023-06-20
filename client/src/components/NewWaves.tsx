import image from "../assets/IMG_20230520_195316.png";

const NewWaves = () => {
  return (
    <section className="new__wave__section">
      <div className="container new__wave__container">
        <div className="content">
          <h2>
            A <span className="colored__text">new wave </span>of
            <span className="colored__text"> collectibles</span> is about to hit
            <span className="colored__text"> the blockchain.</span>
          </h2>
          <p>
            Characterised by soft lighting, vintage colour schemes and quickly
            customes.these generative 3D TinyFaces are the addition to your NFT
            collection you've been waiting for.
          </p>
        </div>
      </div>
      <img className="top__image" src={image} alt="" />
    </section>
  );
};

export default NewWaves;
