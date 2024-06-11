import { menu } from "./data";
import { Link } from "react-router-dom";

const DashboardMenu = ({ isTitle }) => {
  return (
    <aside
      className={`aside pt-1 px-5 overflow-y-auto h-screen scroll-smooth scroll
          transition-all border-r-bg-soft border-r ${
            isTitle ? "w-[250px]" : ""
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
              className="flex items-center gap-2.5 p-2.5 rounded hover:bg-bg-soft transition-all">
              <span className="text-[18px]">{listItem.icon}</span>
              {isTitle && <span>{listItem.title}</span>}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default DashboardMenu;
