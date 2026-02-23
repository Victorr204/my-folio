const ProjectGrid = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  );
};

export default ProjectGrid;
