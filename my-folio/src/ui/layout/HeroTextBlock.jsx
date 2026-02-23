/*
  HERO TEXT BLOCK
  ---------------
  Left column typography layout.
*/

const HeroTextBlock = ({ children }) => {
  return (
    <div
      className="
        w-full
        md:w-1/2
        text-center
        md:text-left
      "
    >
      {children}
    </div>
  );
};

export default HeroTextBlock;
