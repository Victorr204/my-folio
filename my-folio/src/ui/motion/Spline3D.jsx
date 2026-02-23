import Spline from '@splinetool/react-spline';

const Spline3D = ({ scene }) => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Spline scene={scene} />
    </div>
  );
};

export default Spline3D;