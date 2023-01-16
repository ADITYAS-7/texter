import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from "react";

function App() {
  const [mode, SetMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      SetMode("dark");
    } else {
      SetMode("light");
    }
  };
  return (
    <>
      <Navbar title="AS Edit7" mode={mode} togglemode={togglemode} />
      <div className="container my-5">
        <Textform heading="Enter your text below" />
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
