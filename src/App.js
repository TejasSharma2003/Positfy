import "./sass/main.scss";

import Wave from "./assets/Hero-wave.svg";

import Header from "./components/Header";
import Feature from "./components/Feature";
import Procedure from "./components/Procedure";
import Pricing from "./components/Pricing";
import CallToAction from './components/CallToAction';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg">
        <Header />
      </div>
      <img className="bg__wave" src={Wave} alt="wave" />
      <main>
        <Feature />
        <Procedure />
        <Pricing />
        <CallToAction />
        <Footer/>
      </main>
    </>
  );
}

export default App;
