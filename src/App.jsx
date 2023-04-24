import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import News1 from "./pages/news-1/News1";
import News2 from "./pages/news-1/News2";
import News3 from "./pages/news-1/News3";
import News4 from "./pages/news-1/News4";
import News5 from "./pages/news-1/News5";
import MenuMobile from "./components/menu-mobile/MenuMobile";

import './App.css';

function App() {
  return (
    <div className="App">
      {
        <Navbar />
      }

      {
        // <MenuMobile />
      }

      <Routes>
        <Route index path = "/" element={<Home />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/news1" element={<News1 />} />
        <Route path = "/news2" element={<News2 />} />
        <Route path = "/news3" element={<News3 />} />
        <Route path = "/news4" element={<News4 />} />
        <Route path = "/news5" element={<News5 />} />
        <Route path = "/menumobile" element={<MenuMobile />} />
      </Routes>

      {
        <Footer />
      }
    </div>
  );
}

export default App;
