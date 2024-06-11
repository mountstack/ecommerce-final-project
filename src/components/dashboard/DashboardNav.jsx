import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

const DashboardNav = ({ onToggle, isIcon }) => {
  return (
    <nav className="py-3 px-[30px] flex justify-between items-center">
      <div className="flex justify-center gap-4">
        <span onClick={onToggle} className="text-2xl cursor-pointer">
          {isIcon ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </span>

        <Link className="font-bold text-xl" to="/dashboard">
          E-Commerce
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <div className="relative cursor-pointer">
          <IoMdNotifications className="text-xl" />
          <span className="flex justify-center items-center rounded-full absolute -top-2 -right-2 w-[16px] h-[16px] bg-red-600 text-xs">
            1
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[28px] h-[28px] cursor-pointer border rounded-full border-green-600">
            <img
              className="rounded-full"
              src="https://www.minhajul.com/_next/image?url=%2Fminhajul.png&w=256&q=75"
              alt="user"
            />
          </div>
          <h6 className="text-sm font-semibold">Minhaj</h6>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
