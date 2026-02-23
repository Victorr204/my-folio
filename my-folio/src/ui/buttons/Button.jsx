/*
  BUTTON
  ------
  Base button styles.
  Motion will be added later via wrappers.
*/

const Button = ({ children, variant = "primary" }) => {
  const variants = {
    primary:
      "bg-[#38BDF8] text-[#0F172A] hover:bg-[#7DD3FC]",
    secondary:
      "bg-white/10 text-[#F8FAFC] hover:bg-white/20",
  };

  return (
    <button
      className={`
        rounded-lg
        px-5 py-2.5
        text-sm font-medium
        transition
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
