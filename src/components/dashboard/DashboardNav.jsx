import { Link } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

const DashboardNav = ({ onToggle, isIcon, onOpen }) => {
  return (
    <nav className="py-2 ps-[26px] pr-[30px] flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={onOpen}
          className="block lg:hidden text-xl cursor-pointer p-1 rounded hover:bg-bg-soft transition-all duration-100 ease-in-out">
          <GiHamburgerMenu />
        </button>
        <span
          onClick={onToggle}
          className="hidden lg:block text-xl cursor-pointer p-1 rounded hover:bg-bg-soft transition-all duration-100 ease-in-out">
          {isIcon ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </span>

        <Link className="font-bold text-xl" to="/dashboard">
          <span className="block sm:hidden">A-P</span>
          <span className="hidden sm:block">Admin-Panel</span>
        </Link>
      </div>
      <div className="flex gap-6 items-center py-1">
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
          <h6 className="text-sm font-semibold hidden sm:block">Minhaj</h6>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
