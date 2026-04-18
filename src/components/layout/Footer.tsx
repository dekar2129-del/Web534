import { 
  ArrowUpRight, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Facebook, 
  Send
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-8 px-4 rounded-t-[60px] mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <h2 className="text-5xl md:text-6xl font-bold italic">Let's Connnect there</h2>
          <button className="bg-primary text-white rounded-full px-12 py-5 font-bold flex items-center gap-2 hover:bg-white hover:text-dark transition-all italic">
            Hire me <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-20 border-b border-white/10">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
              <span className="text-white font-bold text-3xl">Jenny</span>
            </div>
            <p className="text-gray-400 leading-relaxed italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 italic">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              {["Home", "About Us", "Service", "Resume", "Project"].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 italic">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li>+0123-456-789</li>
              <li>www.example.com</li>
              <li>example@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 italic text-primary">Get the latest information</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-primary"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white w-12 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium">
          <p>Copyright © 2023 <span className="text-primary">Jenny</span>. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">User Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
