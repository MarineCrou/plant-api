// Whenever you want to fetch from the API, you need to use that structure. Should always start with /api,
// then the specific path, like /plants and finally the token added at the end.

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
console.log(import.meta.env.VITE_API_KEY);

import Home from "./components/Home";
import Plants from "./components/Plants";
import Navbar from "./components/NavBar";
import PlantCard from "./components/PlantCard";
import PlantHomePage from "./components/PlantHomePage";
import Plants2 from "./components/Plants2";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants2" element={<Plants2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
