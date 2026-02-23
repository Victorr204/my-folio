// HeroImageBlock.jsx
const HeroImageBlock = ({ children }) => (
  <div className="relative flex justify-center items-center md:justify-end">
    {/* Subtle background glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl -z-10" />
    {children}
  </div>
);

export default HeroImageBlock;