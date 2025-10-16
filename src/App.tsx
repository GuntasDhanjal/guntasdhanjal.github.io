import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Apps from "./pages/Apps";
import AppDetails from "./pages/AppDetails";
import Writing from "./pages/Writing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        {/* Navigation bar */}
        <Navigation />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Optional footer */}
        <footer className="text-center py-6 text-sm text-muted-foreground border-t mt-12">
          © {new Date().getFullYear()} Blue and Gold Healthcare Inc. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}
