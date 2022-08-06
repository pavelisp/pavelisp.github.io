import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";

import HomePage from "./pages/HomePage/HomePage";
import Menu from "./components/Menu/Menu";

function App() {
  const [app, setApp] = useState({
    menu: false,
  });

  const openMenu = () => {
    app.menu ? (document.body.style.overflow = "auto"):(document.body.style.overflow = "hidden") ;
    setApp({ menu: !app.menu });    
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Menu isOpen={app.menu} openMenu={openMenu} />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/work" element={<h1>work</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
