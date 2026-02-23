const HeroSection = ({ children }) => (
  <section
    id="home"
    className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 overflow-hidden"
    style={{ backgroundColor: "var(--bg)", color: "var(--text-primary)" }}
  >
    <div className="container mx-auto flex flex-col-reverse justify-between md:flex-row items-center gap-12 md:gap-20">
      {children}
    </div>
  </section>
);

export default HeroSection;
