import { PageHero } from "../components/sections/PageHero";
import { ArrowUpRight } from "lucide-react";

export const ServicePage = () => {
  const services = [
    { title: "UI/UX Design", desc: "Crafting intuitive and engaging user interfaces and experiences.", img: "https://picsum.photos/seed/s1/600/400" },
    { title: "Web Design", desc: "Building responsive and performant websites that convert.", img: "https://picsum.photos/seed/s2/600/400" },
    { title: "Landing Page", desc: "Optimized landing pages for your marketing campaigns.", img: "https://picsum.photos/seed/s3/600/400" },
    { title: "Mobile App", desc: "Development of cross-platform mobile applications.", img: "https://picsum.photos/seed/s4/600/400" },
    { title: "Branding", desc: "Logo design and brand identity development.", img: "https://picsum.photos/seed/s5/600/400" },
    { title: "Content Strategy", desc: "Planning and creating content that resonates.", img: "https://picsum.photos/seed/s6/600/400" },
  ];

  const process = [
    { num: "01", title: "Discovery", desc: "We start by understanding your goals and your users' needs." },
    { num: "02", title: "Strategy", desc: "We develop a comprehensive plan to achieve your objectives." },
    { num: "03", title: "Design", desc: "We create iterative designs that bring your vision to life." },
    { num: "04", title: "Launch", desc: "We deploy the final solution and monitor its performance." },
  ];

  return (
    <div className="bg-white">
      <PageHero 
        title={<>Better <span className="text-primary italic">Services</span> For You</>}
        subtitle="We provide a wide range of services to help you achieve your business goals and stand out in the digital landscape."
      />

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="group p-8 rounded-[40px] border border-gray-100 bg-light/30 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="mb-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowUpRight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold italic mb-4">{item.title}</h3>
              <p className="text-gray-500 italic mb-8">{item.desc}</p>
              <div className="rounded-2xl overflow-hidden h-48">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold italic mb-12 text-center underline decoration-primary underline-offset-8">Common Questions</h2>
        <div className="space-y-6">
          {[
            { q: "What is your typical project timeline?", a: "Most projects take between 4 to 8 weeks depending on complexity. We divide the work into discovery, design, and delivery phases." },
            { q: "Do you offer branding services?", a: "Yes, we offer full brand identity development including logo design, color palettes, and typography guidelines." },
            { q: "How do we get started?", a: "Simply send us a message through the contact page or book a discovery call. We'll discuss your goals and provide a tailored proposal." },
          ].map((item, i) => (
            <details key={i} className="group border-2 border-gray-100 rounded-[30px] p-8 transition-all hover:border-primary">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h4 className="text-xl font-bold italic">{item.q}</h4>
                <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-primary group-open:rotate-45 transition-transform">
                  <span className="text-2xl">+</span>
                </div>
              </summary>
              <p className="mt-6 text-gray-500 italic leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-dark text-white rounded-[60px] mx-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold italic mb-6 underline decoration-primary underline-offset-8">Our Process</h2>
            <p className="text-gray-400 max-w-xl mx-auto">How we turn your vision into reality through a systematic approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-9xl font-bold text-white/5 absolute -top-8 -left-4 group-hover:text-primary/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold italic mb-4 mt-8">{step.title}</h3>
                  <p className="text-gray-400 italic leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
