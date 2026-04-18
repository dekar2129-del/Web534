import { PageHero } from "../components/sections/PageHero";

export const ResumePage = () => {
  const experiences = [
    { role: "Senior Product Designer", company: "Google", date: "Jan 2021 - Present", desc: "Leading the design system for Android's next generation OS." },
    { role: "Product Designer", company: "Uber", date: "May 2018 - Dec 2020", desc: "Designed the rider experience for the EMEA region." },
    { role: "UI/UX Designer", company: "Airbnb", date: "Feb 2016 - Apr 2018", desc: "Focused on host community tools and communication platform." },
    { role: "Junior Designer", company: "Spotify", date: "Sep 2014 - Jan 2016", desc: "Worked on the desktop player's social interaction features." },
  ];

  return (
    <div className="bg-white">
      <PageHero 
        title={<>My Professional <span className="text-primary italic">Journey</span></>}
        subtitle="A look back at my experience, the companies I've worked with, and the skills I've honed over the years."
      />

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold italic mb-16 underline decoration-primary underline-offset-8">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="flex gap-8 relative group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all shadow-lg ring-4 ring-primary/5">
                      {i + 1}
                    </div>
                    {i !== experiences.length - 1 && <div className="w-0.5 grow bg-gray-100 my-4"></div>}
                  </div>
                  <div className="pb-8">
                    <div className="text-primary font-bold mb-1 italic">{exp.date}</div>
                    <h3 className="text-2xl font-bold italic mb-2">{exp.role}</h3>
                    <p className="text-dark font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-500 italic max-w-md">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold italic mb-16 underline decoration-primary underline-offset-8">Awards & Bio</h2>
            <div className="space-y-12">
              <div className="p-10 bg-light/30 rounded-[40px] border border-gray-100">
                <h3 className="text-2xl font-bold italic mb-6">Career Summary</h3>
                <p className="text-gray-500 italic leading-relaxed text-lg">
                  I am a digital artisan with a focus on human-centric design. My work bridges the gap between complex technology and intuitive user experiences. I thrive on solving difficult problems through research, iteration, and elegant visual execution.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-dark text-white rounded-[30px] shadow-xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <span className="font-bold text-2xl rotate-45 text-white">★</span>
                  </div>
                  <h4 className="font-bold text-xl italic mb-2">Awwwards SOTD</h4>
                  <p className="text-gray-400 text-sm">Recognized for "Food Delivery Platform" in 2022.</p>
                </div>
                <div className="p-8 bg-dark text-white rounded-[30px] shadow-xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <span className="font-bold text-2xl rotate-45 text-white">★</span>
                  </div>
                  <h4 className="font-bold text-xl italic mb-2">Red Dot Award</h4>
                  <p className="text-gray-400 text-sm">Best of the Best in UI Design 2021.</p>
                </div>
              </div>

              <button className="w-full bg-primary text-white rounded-full py-6 font-bold text-xl hover:bg-black transition-all shadow-2xl shadow-primary/20 italic">
                Download My Full CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
