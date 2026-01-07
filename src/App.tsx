import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import Pacchetti from "./pages/Pacchetti";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/pacchetti" element={<Pacchetti />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
