import Faqs from "../components/Faqs";
import FavoriteChar from "../components/FavoriteChar";
import Hero from "../components/Hero";
import Join from "../components/Join";
import NewWaves from "../components/NewWaves";
import Nft_details from "../components/Nft_details";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <Partners />
      <NewWaves />
      <Nft_details />
      <FavoriteChar />
      <Faqs />
      <Join />
    </>
  );
};

export default Home;
