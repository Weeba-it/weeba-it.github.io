import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gay from "./pages/Gay";

const RouterWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages SPA routing
    const handleGitHubPagesRouting = () => {
      const path = window.location.pathname;
      const search = window.location.search;

      // If there's a query parameter starting with /, it's a redirected route
      if (search.startsWith('?/')) {
        const redirectedPath = '/' + search.slice(2).split('&')[0].replace(/~and~/g, '&');
        navigate(redirectedPath + window.location.hash, { replace: true });
      }
    };

    handleGitHubPagesRouting();
  }, [navigate]);

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
