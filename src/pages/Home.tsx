import { 
  ArrowUpRight, 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Send
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-4 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 relative inline-block">
          <div className="border-2 border-dark rounded-full px-6 py-2 font-medium text-lg relative z-10">
            Hello!
          </div>
          <svg className="absolute -top-1 -right-4 w-12 h-12 text-primary" viewBox="0 0 50 50">
            <path d="M10 10 Q 25 2 40 10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M40 10 L 35 15 M 40 10 L 45 5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <h1 className="text-7xl md:text-[100px] font-bold leading-tight mb-8">
          I'm <span className="text-primary italic">Jenny,</span><br />
          Product Designer
        </h1>

        <div className="relative mt-12 w-full max-w-lg mx-auto aspect-square">
          <div className="absolute inset-0 bg-primary rounded-full translate-y-20 blur-2xl opacity-20"></div>
          <div className="absolute inset-x-0 bottom-0 top-[20%] bg-primary rounded-t-full"></div>
          
          <img 
            src="https://picsum.photos/seed/jenny/800/1000" 
            alt="Jenny"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover rounded-t-full rounded-b-[40%] border-b-8 border-primary"
          />

          <div className="absolute -left-20 top-20 bg-white/80 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20 max-w-[200px] text-left">
            <Quote className="text-primary w-6 h-6 mb-2" />
            <p className="text-sm font-medium leading-snug">
              Jenny's exceptional product design ensured our website's success. Highly recommended!
            </p>
          </div>

          <div className="absolute -right-16 top-32 text-left">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            </div>
            <div className="font-bold text-5xl">10 Years</div>
            <div className="text-gray-500 font-medium">Experts</div>
          </div>

          <div className="absolute -left-12 bottom-12 text-left">
            <div className="font-bold text-4xl">450+</div>
            <div className="text-gray-500 font-medium tracking-wide">Client Served</div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 w-full justify-center">
            <button className="bg-primary text-white rounded-full px-10 py-4 font-bold flex items-center gap-2 hover:bg-black transition-all">
              Portfolio <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-dark border-2 border-dark rounded-full px-10 py-4 font-bold hover:bg-dark hover:text-white transition-all">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "UI/UX Design", img: "https://picsum.photos/seed/ui/600/400" },
    { title: "Web Design", img: "https://picsum.photos/seed/web/600/400", active: true },
    { title: "Landing Page", img: "https://picsum.photos/seed/landing/600/400" },
  ];

  return (
    <section id="service" className="bg-dark py-24 px-4 text-white rounded-[60px] mx-4 my-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-bold italic">My <span className="text-primary">Services</span></h2>
          <p className="max-w-md text-gray-400 italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group relative p-8 rounded-[40px] border transition-all duration-500 ${service.active ? 'bg-primary border-primary' : 'bg-[#222] border-white/5 hover:border-primary/50'}`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold">{service.title}</h3>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${service.active ? 'bg-white text-primary' : 'bg-white/10 text-white group-hover:bg-primary'}`}>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    { role: "Self-Employed, NYC", date: "Sep 2020 - July 2023", title: "Visual Designer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" },
    { role: "Insightancer", date: "Aug 2016 - Sep 2020", title: "UI/UX Designer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" },
    { role: "KG Design Studio", date: "Sep 2025 - Aug 2016", title: "Web Designer", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" },
  ];

  return (
    <section id="resume" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-20 italic">My Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-16">
            <div className="md:text-right">
              <h3 className="text-3xl font-bold mb-2 italic">{exp.role}</h3>
              <p className="text-gray-500 font-medium">{exp.date}</p>
            </div>
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-primary border-4 border-white ring-4 ring-primary/20"></div>
              {i !== experiences.length - 1 && <div className="absolute top-10 left-1/2 w-px h-24 bg-gray-200 -translate-x-1/2"></div>}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 italic">{exp.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-md italic">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Henry, Arthur", role: "CEO, Food Express", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas", rating: 5 },
    { name: "Joshua, Arthur", role: "CTO, EV Charger", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas", rating: 5 },
  ];

  return (
    <section className="bg-dark py-24 px-4 text-white rounded-[60px] mx-4 my-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 relative inline-block italic">
          Testimonials that <br /> Speak to <span className="text-primary italic">My Results</span>
          <div className="absolute -right-12 top-0 text-white/20 transform rotate-12">
            <Send className="w-12 h-12" />
          </div>
        </h2>
        <p className="text-gray-400 mb-16 max-w-xl mx-auto italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] text-left relative overflow-hidden group">
              <Quote className="absolute right-8 bottom-8 text-white/5 w-24 h-24 transform rotate-12 group-hover:rotate-0 transition-transform" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                <span className="ml-2 font-bold">{t.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed italic">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} className="w-14 h-14 rounded-full" />
                <div>
                  <h4 className="font-bold text-xl">{t.name}</h4>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/10">
              <ChevronLeft />
            </button>
            <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:bg-black transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
    return (
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight italic">
          Have An Awesome Project <br /> Idea? <span className="text-primary">Let's Discuss</span>
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-primary/10 p-2 rounded-full text-primary">
            <Send className="w-5 h-5" />
          </div>
          <input 
            type="email" 
            placeholder="Enter Email Address" 
            className="w-full bg-light rounded-full py-6 pl-16 pr-40 text-lg focus:outline-none border-2 border-transparent focus:border-primary transition-all italic"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-primary text-white rounded-full px-10 font-bold hover:bg-black transition-all italic">
            Book Call
          </button>
        </div>
      </section>
    );
  };

export const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Experience />
      <Testimonials />
      <CTA />
    </div>
  );
};
