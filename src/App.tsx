/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicePage } from "./pages/Service";
import { ResumePage } from "./pages/Resume";
import { ProjectPage } from "./pages/Project";
import { ContactPage } from "./pages/Contact";

const Marquee = () => {
  const items = ["UI/UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];
  return (
    <div className="bg-primary py-8 overflow-hidden transform -rotate-1 skew-x-1">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {items.map((item, j) => (
              <div key={j} className="flex items-center gap-8">
                <span className="text-white text-4xl font-bold uppercase tracking-widest italic">{item}</span>
                <span className="text-white/40 text-4xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "About":
        return <AboutPage />;
      case "Service":
        return <ServicePage />;
      case "Resume":
        return <ResumePage />;
      case "Project":
        return <ProjectPage />;
      case "Contact Us":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-primary selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>

      <Marquee />
      <Footer />
    </div>
  );
}
