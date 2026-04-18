import { 
  ArrowUpRight, 
} from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const links = ["Home", "About", "Service", "Resume", "Project", "Contact Us"];
  
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-dark/90 backdrop-blur-md px-6 md:px-8 py-3 rounded-full flex items-center justify-between border border-white/10 shadow-2xl">
        <div className="hidden md:flex items-center gap-1">
          {links.slice(0, 3).map((link) => (
            <button 
              key={link} 
              onClick={() => setCurrentPage(link)}
              className={`font-medium transition-colors px-4 py-2 rounded-full ${currentPage === link ? 'text-primary' : 'text-white hover:text-primary'}`}
            >
              {link}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('Home')}>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
          <span className="text-white font-bold text-xl">Jenny</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {links.slice(3).map((link) => (
            <button 
              key={link} 
              onClick={() => setCurrentPage(link)}
              className={`font-medium transition-colors px-4 py-2 rounded-full ${currentPage === link ? 'text-primary' : 'text-white hover:text-primary'}`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden text-white p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
    </nav>
  );
};
