import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import WelcomeDate from "./components/welcome-date/WelcomeDate";
import Headlines from "./components/headlines/Headlines";
import LatestNews from "./components/latest-news/LatestNews";
import PopularRelated from "./components/popular-related/PopularRelated";

import './App.css';
function App() {
  return (
    <div className="App">
      {
        // <Navbar />
      }

      {
        <PopularRelated />
      }

      <Routes>
        {/* <Route index path = "/" element={<Home />} /> */}
        {/* <Route path = "/home" element={<Home />} /> */}
        <Route path = "/about" element={<About />} />
      </Routes>

      {
        // <Footer />
      }
    </div>
  );
}

export default App;
