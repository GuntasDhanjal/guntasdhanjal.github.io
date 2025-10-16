import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Apps from "./pages/Apps";
import Writing from "./pages/Writing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// GitHub Pages SPA redirect handler
const redirectToCorrectPath = () => {
  const l = window.location;
  
  // Check if this is a redirect from 404.html
  if (l.search.includes('/?')) {
    // Extract the path from the query parameter
    const pathMatch = l.search.match(/\?\/\?([^&]*)/);
    if (pathMatch) {
      const path = pathMatch[1].replace(/~and~/g, '&');
      // Clean up the search params
      const cleanSearch = l.search.replace(/\?\/\?[^&]*&?/, '').replace(/^&/, '');
      const newUrl = path + (cleanSearch ? '?' + cleanSearch : '') + l.hash;
      window.history.replaceState(null, '', newUrl);
    }
  }
};

const App = () => {
  useEffect(() => {
    redirectToCorrectPath();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
