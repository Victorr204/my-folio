import React from "react";

const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-sm hover:text-indigo-400 transition-colors"
    >
      {children}
    </a>
  );
};

export default FooterLink;
