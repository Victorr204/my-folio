import GlassHeader from "../layout/GlassHeader";

const NavBarUI = ({ left, center, right, mobile, hidden }) => {
  return (
    <header
      className={`
        fixed top-4 left-1/2 z-50
        w-[96%] max-w-7xl
        -translate-x-1/2
        transition-all duration-500 ease-out
        ${hidden ? "-translate-y-32 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <GlassHeader>
        <nav
          className="
            flex items-center justify-between
            px-6 py-3
          "
        >
          {/* Left */}
          <div className="flex items-center gap-3 text-base font-semibold text-white">
            {left}
          </div>

          {/* Center */}
          <div
            className="
              hidden md:flex items-center justify-center gap-10
              px-10 py-3
              rounded-full
              bg-white/10
              border border-white/15
              backdrop-blur-lg
              text-base font-medium
            "
          >
            {center}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            {right}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {mobile}
          </div>
        </nav>
      </GlassHeader>
    </header>
  );
};

export default NavBarUI;
