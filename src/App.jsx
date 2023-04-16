import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import News from "./pages/news/News";

import './App.css';

function App() {
  return (
    <div className="App">
      {
        <Navbar />
      }

      {
        // <News />
      }

      <Routes>
        <Route index path = "/" element={<Home />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/news" element={<News />} />
      </Routes>

      {
        <Footer />
      }
    </div>
  );
}

export default App;
