import { Link } from "react-router-dom";

const EmptyPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-[700px] bg-green-300 rounded flex justify-center items-center">
        <Link to={"/dashboard"} className="text-sm text-blue-600 underline">
          go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default EmptyPage;
