import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join";
import NavrBar from "./components/NavrBar";
import NewWaves from "./components/NewWaves";
import Nft_details from "./components/Nft_details";
import Partners from "./components/Partners";
function App() {
  return (
    <div className="app">
      <header>
        <NavrBar />
        <Hero />
      </header>
      <Partners />
      <NewWaves />
      <Nft_details />
      <Faqs />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
