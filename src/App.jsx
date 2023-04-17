import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import News from "./pages/news/News";
import MenuMobile from "./components/menu-mobile/MenuMobile";

import './App.css';

function App() {
  return (
    <div className="App">
      {
        // <Navbar />
      }

      {
        <MenuMobile />
      }

      <Routes>
        {/* <Route index path = "/" element={<Home />} /> */}
        {/* <Route path = "/home" element={<Home />} /> */}
        {/* <Route path = "/about" element={<About />} /> */}
        {/* <Route path = "/news" element={<News />} /> */}
        {/* <Route path = "/menumobile" element={<MenuMobile />} /> */}
      </Routes>

      {
        // <Footer />
      }
    </div>
  );
}

export default App;
