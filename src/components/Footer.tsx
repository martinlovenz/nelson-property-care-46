const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-secondary-foreground/50 font-body text-sm">
          © {new Date().getFullYear()} Martin Love Contracting. Nelson, New Zealand.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
