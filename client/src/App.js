import "./App.css";
import Header from "./components/Head"; //tried to call it header but was stupid
import Hero from "./components/Hero";
import Examples from "./components/Examples";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SolarBodiesSearch from "./components/BodiesSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SolarBodiesSearch />
      <Examples />
      <Footer />
    </div>
  );
}

export default App;
