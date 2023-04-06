import "./App.css";
import Header from './components/Head'; //tried to call it header but was stupid
import Hero from './components/Hero';
import Examples from './components/Examples';
import Footer from './components/Footer';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Examples />
      <Footer />
    </div>
  );
}

export default App;

