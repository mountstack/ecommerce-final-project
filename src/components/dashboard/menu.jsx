import { ImProfile } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoSettings, IoHome } from "react-icons/io5";
import { FaRegCalendarAlt, FaChartLine } from "react-icons/fa";
import { MdBackup, MdOutlineEventNote, MdOutlinePostAdd } from "react-icons/md";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/dashboard",
        icon: <IoHome />,
      },
      {
        id: 2,
        title: "Profile",
        url: "/dashboard/profile",
        icon: <ImProfile />,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/dashboard/users",
        icon: <FaUsers />,
      },
      {
        id: 2,
        title: "Products",
        url: "/dashboard/products",
        icon: <BsCart4 />,
      },
      {
        id: 3,
        title: "Orders",
        url: "/dashboard/empty",
        icon: <MdOutlineEventNote />,
      },
      {
        id: 4,
        title: "Posts",
        url: "/dashboard/empty",
        icon: <MdOutlinePostAdd />,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Notes",
        url: "/dashboard/empty",
        icon: <PiNotePencilDuotone />,
      },

      {
        id: 2,
        title: "Calendar",
        url: "/dashboard/empty",
        icon: <FaRegCalendarAlt />,
      },
    ],
  },
  {
    id: 4,
    title: "settings",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/dashboard/empty",
        icon: <IoSettings />,
      },
      {
        id: 2,
        title: "Backups",
        url: "/dashboard/empty",
        icon: <MdBackup />,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/dashboard/empty",
        icon: <FaChartLine />,
      },
    ],
  },
  {
    id: 6,
    title: "checking",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/dashboard/empty",
        icon: <FaUsers />,
      },
      {
        id: 2,
        title: "Products",
        url: "/dashboard/empty",
        icon: <BsCart4 />,
      },
      {
        id: 3,
        title: "Orders",
        url: "/dashboard/empty",
        icon: <MdOutlineEventNote />,
      },
      {
        id: 4,
        title: "Posts",
        url: "/dashboard/empty",
        icon: <MdOutlinePostAdd />,
      },
      {
        id: 10,
        title: "Users",
        url: "/dashboard/empty",
        icon: <FaUsers />,
      },
      {
        id: 20,
        title: "Products",
        url: "/dashboard/empty",
        icon: <BsCart4 />,
      },
      {
        id: 30,
        title: "Orders",
        url: "/dashboard/empty",
        icon: <MdOutlineEventNote />,
      },
      {
        id: 40,
        title: "Posts",
        url: "/dashboard/empty",
        icon: <MdOutlinePostAdd />,
      },
      {
        id: 140,
        title: "Users",
        url: "/dashboard/empty",
        icon: <FaUsers />,
      },
      {
        id: 240,
        title: "Products",
        url: "/dashboard/empty",
        icon: <BsCart4 />,
      },
      {
        id: 350,
        title: "Orders",
        url: "/dashboard/empty",
        icon: <MdOutlineEventNote />,
      },
      {
        id: 450,
        title: "Posts",
        url: "/dashboard/empty",
        icon: <MdOutlinePostAdd />,
      },
    ],
  },
];
