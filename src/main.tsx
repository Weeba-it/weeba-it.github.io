import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle SPA routing for GitHub Pages
const handleGitHubPagesRouting = () => {
  if (window.location.pathname.startsWith('/?/')) {
    const path = window.location.pathname.slice(2); // Remove '/?'
    window.history.replaceState(null, '', path + window.location.search);
  }
};

handleGitHubPagesRouting();

createRoot(document.getElementById("root")!).render(<App />);
