import { PageHero } from "../components/sections/PageHero";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="bg-white">
      <PageHero 
        title={<>Let's Build Something <span className="text-primary italic">Together</span></>}
        subtitle="I'm currently available for freelance work and full-time collaborations. Get in touch and let's discuss your next project."
      />

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold italic mb-8 underline decoration-primary underline-offset-8">Contact Info</h2>
              <p className="text-gray-500 italic text-lg leading-relaxed mb-12">
                Have a specific inquiry or just want to say hi? Feel free to reach out through any of these channels.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone", value: "+0123-456-789" },
                { icon: Mail, title: "Email", value: "example@gmail.com" },
                { icon: MapPin, title: "Location", value: "123 Designer Street, NYC, USA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-light/50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">{item.title}</h4>
                    <p className="text-2xl font-bold italic">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-bold italic mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {['FB', 'LI', 'IG', 'TW', 'GH'].map(social => (
                  <button key={social} className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center font-bold text-gray-500 hover:border-primary hover:text-primary transition-all">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-dark p-12 rounded-[48px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <h3 className="text-3xl font-bold text-white italic mb-12">Send a Message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-primary transition-all italic"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-primary transition-all italic"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-primary transition-all italic"
              />
              <textarea 
                placeholder="Your Message"
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-primary transition-all italic resize-none"
              ></textarea>
              <button className="w-full bg-primary text-white rounded-full py-6 font-bold text-xl hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-4 italic shadow-xl shadow-primary/20">
                Send Message <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="h-96 w-full px-4 mb-20">
        <div className="w-full h-full bg-light rounded-[60px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2srs!4v1690000000000!5m2!1sen!2srs" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
