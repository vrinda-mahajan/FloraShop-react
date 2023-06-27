import { InfinitySpin } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="#53c050" />
    </div>
  );
};
export {Loader}