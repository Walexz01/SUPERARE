import Hero from "./components/Hero";
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
    </div>
  );
}

export default App;
