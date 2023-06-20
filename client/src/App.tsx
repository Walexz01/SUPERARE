import Hero from "./components/Hero";
import NavrBar from "./components/NavrBar";
import Partners from "./components/Partners";
function App() {
  return (
    <div className="app">
      <header>
        <NavrBar />
        <Hero />
      </header>
      <Partners />
    </div>
  );
}

export default App;
