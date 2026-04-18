import { PageHero } from "../components/sections/PageHero";

export const AboutPage = () => {
  const skills = [
    { name: "Figma", level: "95%" },
    { name: "Adobe XD", level: "85%" },
    { name: "Photoshop", level: "80%" },
    { name: "Illustrator", level: "75%" },
    { name: "Webflow", level: "70%" },
    { name: "React", level: "65%" },
  ];

  return (
    <div className="bg-white">
      <PageHero 
        title={<>Knowing <span className="text-primary">About Me</span></>}
        subtitle="I am a product designer based in NYC. With over 10 years of experience, I've helped hundreds of clients bring their ideas to life."
      />
      
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/about-jenny/800/1000" 
                alt="Jenny" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[30px] shadow-2xl">
              <div className="text-white text-4xl font-bold italic mb-1">10+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold italic mb-8">Passionate about creating <br /> impactful digital experiences</h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
            <p className="text-gray-500 mb-12 leading-relaxed text-lg italic">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2 font-bold italic">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-dark text-white rounded-[60px] mx-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold italic mb-16 underline decoration-primary underline-offset-8">My Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
              <div className="text-primary font-bold mb-2">2014 - 2016</div>
              <h3 className="text-3xl font-bold italic mb-4">Master of Design</h3>
              <p className="text-gray-400 italic">Royal College of Art, London</p>
            </div>
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
              <div className="text-primary font-bold mb-2">2010 - 2014</div>
              <h3 className="text-3xl font-bold italic mb-4">Bachelor of Arts</h3>
              <p className="text-gray-400 italic">University of Arts, Belgrade</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
