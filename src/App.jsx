import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import From from "./Contact";
import Contact from "./Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
