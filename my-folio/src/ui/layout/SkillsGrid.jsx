import React from "react";

const SkillsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
      {children}
    </div>
  );
};

export default SkillsGrid;
