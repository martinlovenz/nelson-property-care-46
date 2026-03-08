const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl text-primary tracking-wider mb-6">
            About Martin
          </h2>
          <p className="text-secondary-foreground/80 font-body text-lg leading-relaxed mb-6">
            Based in Nelson, Martin Love Contracting provides dependable, high-quality property 
            maintenance and improvement services. With hands-on experience across residential and 
            commercial properties, Martin delivers practical solutions with a personal touch.
          </p>
          <p className="text-secondary-foreground/80 font-body text-lg leading-relaxed">
            Whether it's a quick repair, a full repaint, or managing a larger project from start to finish — 
            you'll get honest advice, fair pricing, and work done right the first time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { label: "Nelson Based", value: "📍" },
              { label: "Reliable & Honest", value: "🤝" },
              { label: "No Job Too Small", value: "🔧" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl mb-2">{item.value}</div>
                <div className="text-secondary-foreground/70 font-body text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
