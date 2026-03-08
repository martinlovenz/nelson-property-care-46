import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl text-secondary tracking-wider mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Ready to get your property sorted? Give Martin a call or drop an email.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-xl p-8 space-y-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <a
              href="tel:0273714816"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-body">Phone</div>
                <div className="text-foreground font-body font-semibold text-lg">027 371 4816</div>
              </div>
            </a>
            <a
              href="mailto:martinlove238@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-body">Email</div>
                <div className="text-foreground font-body font-semibold text-lg">martinlove238@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-body">Location</div>
                <div className="text-foreground font-body font-semibold text-lg">Nelson, New Zealand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
