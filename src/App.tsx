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
  const pathSegmentsToKeep = 1;
  const l = window.location;
  let redirect: string | undefined;

  // If this is a redirect from 404.html
  if (l.search) {
    const p = l.search.slice(1).split('&');
    if (p.some(part => part.slice(0, 2) === '/?')) {
      const segments = p
        .filter(part => part.slice(0, 2) === '/?')[0]
        .slice(2)
        .split('/')
        .map(s => s.replace(/~and~/g, '&'));
      const s = l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep);
      l.search = '?' + p.filter(part => part.slice(0, 2) !== '/?').join('&');
      l.pathname = s.join('/') + '/' + segments.join('/');
      redirect = l.pathname + l.search + l.hash;
    }
  }

  // If we have a redirect, perform it
  if (redirect) {
    window.history.replaceState(null, '', redirect);
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
