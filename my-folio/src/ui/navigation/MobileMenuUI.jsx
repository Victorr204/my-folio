/*
  MOBILE MENU UI
  --------------
  Fullscreen navigation overlay for mobile.
  UI only — no state, no animations yet.
*/

const MobileMenuUI = ({ children, onClose }) => {
  return (
    <div
      className="
        fixed inset-0 z-40
        bg-[#0F172A]/95
        backdrop-blur-md
        flex flex-col
        items-center justify-center
        gap-8
      "
    >
      {/* Close action (slot-based) */}
      <button
        onClick={onClose}
        aria-label="Close Menu"
        className="absolute top-6 right-6 text-[#38BDF8]"
      >
        ✕
      </button>

      {/* Navigation items */}
      <nav className="flex flex-col items-center gap-6 text-xl">
        {children}
      </nav>
    </div>
  );
};

export default MobileMenuUI;
