const MobileDockItem = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex flex-col items-center gap-1
        text-neutral-300 text-xs
        transition-all duration-300
        hover:text-[#38BDF8]
        hover:scale-110
      "
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default MobileDockItem;
