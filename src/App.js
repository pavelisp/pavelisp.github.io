import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.scss";

import Menu from "./components/Menu/Menu";

function App() {
  const [app, setApp] = useState({
    menu: false,
  });

  const openMenu = () => {
    setApp({ menu: !app.menu });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <h1 className="logo">Pavel Ispravnikov</h1>
        <Menu isOpen={app.menu} openMenu={openMenu} />
        <Routes>
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/work" element={<h1>work</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
