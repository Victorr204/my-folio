import React from "react";

const FooterRow = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      {children}
    </div>
  );
};

export default FooterRow;
