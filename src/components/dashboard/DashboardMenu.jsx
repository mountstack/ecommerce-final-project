import { menu } from "./menu";
import { Link, useLocation } from "react-router-dom";

const DashboardMenu = ({ isTitle }) => {
  const { pathname } = useLocation();

  return (
    <aside
      className={`aside pt-1 px-5 overflow-y-auto h-screen scroll-smooth border-r-bg-soft border-r transition-all ease-in-out duration-300 hidden lg:block ${
        isTitle ? "w-[250px]" : "w-[90px]"
      }`}>
      {menu.map((item) => (
        <div key={item.id} className="flex flex-col">
          <span className="text-[10px] uppercase text-text-soft font-extralight py-1">
            {item.title}
          </span>

          {item.listItems.map((listItem) => (
            <Link
              key={listItem.id}
              to={listItem.url}
              className={`flex items-center p-2.5 rounded hover:bg-bg-soft duration-100 transition-all relative group  ${
                pathname === listItem.url ? "bg-bg-soft" : ""
              }`}>
              {!isTitle && (
                <div className="absolute bottom-full left-1/2 transform -translate-y-1/2 -mb-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300 transition-transform  bg-text-main text-bg-dark text-[7px] py-[2px] px-1 rounded">
                  {listItem.title}
                </div>
              )}

              <span className="text-xl">{listItem.icon}</span>

              <span
                className={`text-base leading-5 ms-4 transition-transform duration-300 ${
                  isTitle
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2"
                }`}>
                {isTitle && listItem.title}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default DashboardMenu;
