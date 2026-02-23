/*
  MOBILE NAV LINK
  ----------------
  Larger tappable targets for mobile navigation.
*/

const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        text-[#F8FAFC]
        hover:text-[#38BDF8]
        transition-colors
      "
    >
      {children}
    </a>
  );
};

export default MobileNavLink;
