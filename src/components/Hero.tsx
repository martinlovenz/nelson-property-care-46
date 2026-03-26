import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.svg";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Martin Love Contracting Logo"
            className="h-16 md:h-20 w-auto drop-shadow-lg relative left-px"
          />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-wider mb-4">
          Property Maintenance
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8 font-light">
          Professional property maintenance, repairs & renovations serving Nelson, New Zealand. 
          Trusted local expertise for every job.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0273714816"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:brightness-110 transition-all"
          >
            <Phone className="w-5 h-5" />
            027 371 4816
          </a>
          <a
            href="mailto:martinlove238@gmail.com"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/20 transition-all backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
