import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
