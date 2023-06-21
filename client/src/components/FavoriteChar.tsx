import Imageslide from "./Imageslide";

const FavoriteChar = () => {
  return (
    <section className="favoriteChar__sections">
      <div className="container favoriteChar__container">
        <div className="heading">Find your favourite character</div>
        <div className="avatar__list">
          <Imageslide />
        </div>
      </div>
    </section>
  );
};

export default FavoriteChar;
