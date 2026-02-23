import React from "react";

const FooterUI = ({ children }) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {children}
      </div>
    </footer>
  );
};

export default FooterUI;
