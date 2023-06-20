import Hero from "./components/Hero";
import NavrBar from "./components/NavrBar";
import NewWaves from "./components/NewWaves";
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
    </div>
  );
}

export default App;
