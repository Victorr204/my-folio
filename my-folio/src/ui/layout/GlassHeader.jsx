/*
  GLASS HEADER
  ------------
  Pure visual container.
  Used by navigation or any floating UI.
*/

const GlassHeader = ({ children }) => {
  return (
    <div
      className="
        rounded-2xl
        bg-white/10
        dark:bg-[#1E293B]/60
        backdrop-blur-md
        border border-white/10
        shadow-lg
      "
    >
      {children}
    </div>
  );
};

export default GlassHeader;
