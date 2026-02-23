const ProjectContent = ({ title, desc, children }) => (
  <div className="p-6 relative z-10">
    <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 text-sm mb-4">{desc}</p>
    <div className="flex items-center gap-4">{children}</div>
  </div>
);

export default ProjectContent;
