import React from "react";

const FooterColumn = ({ children }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      {children}
    </div>
  );
};

export default FooterColumn;
