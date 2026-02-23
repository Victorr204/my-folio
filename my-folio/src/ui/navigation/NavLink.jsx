const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="
        relative text-base text-neutral-300
        transition-colors duration-300
        hover:text-[#38BDF8]
        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-full
        after:bg-[#38BDF8]
        after:scale-x-0 after:origin-left
        after:transition-transform after:duration-300
        hover:after:scale-x-100
      "
    >
      {children}
    </a>
  );
};

export default NavLink;
