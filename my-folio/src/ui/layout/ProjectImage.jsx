const ProjectImage = ({ src, alt }) => (
  <div className="relative h-48 w-full overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-70"></div>
  </div>
);

export default ProjectImage;
