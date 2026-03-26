import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#">
          <img src={logo} alt="Martin Love Contracting" className="h-20 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary-foreground/70 hover:text-primary font-body text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0273714816"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body text-sm font-semibold hover:brightness-110 transition-all"
          >
            Call Now
          </a>
        </div>
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-secondary-foreground/70 hover:text-primary font-body text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0273714816"
            className="block bg-primary text-primary-foreground px-5 py-2 rounded-lg font-body text-sm font-semibold text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
