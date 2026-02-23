/*
  MOBILE DOCK UI
  --------------
  Floating bottom navigation bar for mobile.
  Thumb-friendly, persistent, app-like.
  UI only — no state, no animation.
*/

const MobileDockUI = ({ children }) => {
  return (
    <nav
      className="
        fixed bottom-4 left-1/2 z-50
        -translate-x-1/2
        w-[90%]
        max-w-md
        rounded-2xl
        bg-[#1E293B]/80
        backdrop-blur-md
        border border-white/10
        shadow-xl
        px-4 py-3
        flex items-center justify-between
        md:hidden
      "
    >
      {children}
    </nav>
  );
};

export default MobileDockUI;
