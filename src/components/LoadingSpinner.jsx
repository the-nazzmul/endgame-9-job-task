import { GridLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div>
        <GridLoader size={80} speedMultiplier={1} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
