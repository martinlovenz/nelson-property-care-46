import {
  Wrench,
  Paintbrush,
  TreePine,
  Droplets,
  Trash2,
  ClipboardList,
  Hammer,
  Home,
} from "lucide-react";

const services = [
  { icon: Wrench, title: "Maintenance", description: "Ongoing property upkeep to keep your home or business in top shape." },
  { icon: Hammer, title: "Repairs", description: "Fast, reliable repairs for everything from decks to doors and fences." },
  { icon: Home, title: "Minor Renovations", description: "Refreshing spaces with quality renovation work that adds value." },
  { icon: Paintbrush, title: "Painting", description: "Interior and exterior painting with a clean, professional finish." },
  { icon: TreePine, title: "Tree Work", description: "Pruning, removal and general tree care to keep your property safe." },
  { icon: Droplets, title: "Waterblasting", description: "High-pressure cleaning for driveways, decks, roofs and more." },
  { icon: Trash2, title: "Clearing & Cleaning", description: "Section clearing, rubbish removal and thorough property clean-ups." },
  { icon: ClipboardList, title: "Advice & Project Management", description: "Expert guidance and project coordination from start to finish." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-secondary tracking-wider mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            From small repairs to full property makeovers — we've got Nelson covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl text-secondary mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
