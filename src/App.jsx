import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import ScrollToHash from "./ScrollToHash";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;