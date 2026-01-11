import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";

const queryClient = new QueryClient();

/* PAGINA 404 */
const NnFunziona = () => (
  <div className="h-screen flex items-center justify-center bg-black">
    <h1 className="text-white text-[10vw] font-black text-center">
      Nn funziona +
    </h1>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* HOME → WEEBA.IT FUNZIONA */}
            <Route path="/" element={<Index />} />

            {/* 404 → SOLO SE LA ROTTA NON ESISTE */}
            <Route path="*" element={<NnFunziona />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
