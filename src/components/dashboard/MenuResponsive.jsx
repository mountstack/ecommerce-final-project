import { menu } from "./menu";
import { Link, useLocation } from "react-router-dom";

const MenuResponsive = () => {
  const { pathname } = useLocation();

  return (
    <aside className="aside overflow-y-auto h-screen scroll-smooth transition-all duration-300">
      <h1 className="font-bold text-xl mb-4">Admin-Panel</h1>

      {menu.map((item) => (
        <div key={item.id} className="flex flex-col">
          <span className="text-[10px] uppercase text-text-soft font-extralight py-1">
            {item.title}
          </span>

          {item.listItems.map((listItem) => (
            <Link
              key={listItem.id}
              to={listItem.url}
              className={`flex items-center p-2.5 rounded hover:bg-bg-soft duration-300 transition-all relative group ${
                pathname === listItem.url ? "bg-bg-soft" : ""
              }`}>
              <span className="text-xl">{listItem.icon}</span>

              <span className="text-base leading-5 ms-4">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default MenuResponsive;
