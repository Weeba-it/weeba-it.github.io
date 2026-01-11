import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gay from "./pages/Gay";

const RouterWrapper = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/frocio" element={<NotFound />} />
      <Route path="/gay" element={<Gay />} />
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
