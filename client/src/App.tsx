import Hero from "./components/Hero";
import NavrBar from "./components/NavrBar";
function App() {
  return (
    <div className="app">
      <header>
        <NavrBar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
