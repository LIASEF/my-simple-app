import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Привет, это мой простой сайт!</h1>
        <p>Это MVP для стартапа или блога.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
