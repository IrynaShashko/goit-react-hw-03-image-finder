import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      wrapperStyle={{ justifyContent: 'center' }}
      height="50"
      color="#3f51b5"
    />
  );
};

export default Loader;
