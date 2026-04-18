import { PageHero } from "../components/sections/PageHero";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const ProjectPage = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "UI/UX Design", "Web Design", "App Design"];
  
  const projects = [
    { title: "Food Express", category: "App Design", img: "https://picsum.photos/seed/p1/1200/900" },
    { title: "EV Charging", category: "UI/UX Design", img: "https://picsum.photos/seed/p2/1200/900" },
    { title: "Smart Home", category: "Web Design", img: "https://picsum.photos/seed/p3/1200/900" },
    { title: "Fitness Tracker", category: "App Design", img: "https://picsum.photos/seed/p4/1200/900" },
    { title: "E-Commerce", category: "Web Design", img: "https://picsum.photos/seed/p5/1200/900" },
    { title: "AI Assistant", category: "UI/UX Design", img: "https://picsum.photos/seed/p6/1200/900" },
  ];

  const visibleProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white">
      <PageHero 
        title={<>Selected <span className="text-primary italic">Works</span> & Projects</>}
        subtitle="Explore my latest projects, from mobile apps to complex web platforms, all designed with a focus on user experience."
      />

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-10 py-4 rounded-full font-bold transition-all border-2 ${filter === f ? 'bg-primary border-primary text-white scale-110 shadow-xl shadow-primary/20' : 'bg-white border-gray-100 text-gray-400 hover:border-primary hover:text-primary'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleProjects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden mb-8 bg-gray-100 border-8 border-gray-50 shadow-sm transition-all duration-500 group-hover:border-primary/10 group-hover:shadow-2xl">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-10 h-10" />
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="text-primary font-bold italic mb-2 tracking-widest uppercase text-sm">{project.category}</div>
                <h3 className="text-4xl font-bold italic group-hover:text-primary transition-colors">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-primary text-white rounded-[60px] mx-4 mb-20 flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold italic mb-8 max-w-2xl leading-tight">Ready to see more specialized work?</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-12 text-lg italic italic">I have a secret portfolio of confidential projects for high-tier clients. Interested?</p>
        <button className="bg-dark text-white rounded-full px-12 py-5 font-bold hover:bg-white hover:text-dark transition-all text-xl italic">
          Request Access
        </button>
      </section>
    </div>
  );
};
