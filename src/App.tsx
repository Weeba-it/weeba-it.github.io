import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

const NotFound = () => (
  <div className="h-screen flex items-center justify-center bg-black">
    <h1 className="text-white text-[10vw] font-black text-center">
      Nn funziona +
    </h1>
  </div>
);

const RouterWrapper = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/frocio" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <RouterWrapper />
  </BrowserRouter>
);

export default App;
