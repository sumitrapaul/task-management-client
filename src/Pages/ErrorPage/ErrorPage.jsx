import { Link } from "react-router-dom";
import errorImage from "../../../public/preview.gif"

const ErrorPage = () => {
    return (
        <div>
      <div className="flex justify-center items-center mt-24">
        <img className="h-[400px]" src={errorImage} alt="" />
      </div>
      <div className="flex justify-center items-center mt-12">
        <Link to="/">
          <button className="btn bg-sky-600 text-white">Back To Home</button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;