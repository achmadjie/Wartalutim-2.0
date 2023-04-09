import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import WelcomeDate from "./components/welcome-date/WelcomeDate";
import Headlines from "./components/headlines/Headlines";
import './App.css';

function App() {
  return (
    <div className="App">
      {
        // <Navbar />
      }

      {
        <Headlines />
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
