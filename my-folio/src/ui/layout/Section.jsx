const Section = ({ id, children }) => {
  return (
    <section
      id={id}
      className="
        py-24
        px-6
        bg-(--bg)
      "
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
