"use client";

import React, { useEffect, useState } from "react";
import {
  FaTasks,
  FaHome,
  FaCog,
  FaUsers,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import Image from "next/image";
import create from "../../public/create_new.png";
import download from "../../public/download.png";
import notification_bell from "../../public/notification_bell.png";
import theme from "../../public/theme.png";
import more_items from "../../public/more_items.png";
import home from "../../public/home.png";
import boards from "../../public/boards.png";
import settings from "../../public/settings.png";
import teams from "../../public/teams.png";
import analytics from "../../public/analytics.png";
import CreateTask from "./CreateTask";
import { useRouter } from "next/navigation";

interface User {
  name?: string;
  email?: string;
  // Add other user properties as needed
}
const Sidebar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState<User>({});

  // const router = useRouter();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   router.push("/login");
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/login");
  //   }
  //   const user = localStorage.getItem("user")
  //   setUser(JSON.parse(user as string))
  // }, []);

  return (
    <>
      <div className="flex flex-col h-screen p-4 w-60 shadow">
        <div>
          {/* <Image/> */}
          {/* <h3 className="text-lg font-bold mb-4">{user.name}</h3> */}
        </div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between gap-4">
            <Image src={notification_bell} alt="notification_bell" />
            <Image src={theme} alt="theme" />
            <Image src={more_items} alt="more_items" />
          </div>
          <button
            // onClick={handleLogout}
            className="px-2 py-1 text-sm text-white bg-gray-400 rounded"
          >
            Logout <FaSignOutAlt className="inline ml-1" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className="flex items-center p-2 space-x-2 text-gray-700 bg-gray-200 rounded"
          >
            <Image src={home} alt="home" />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 space-x-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            <Image src={boards} alt="boards" />
            <span>Boards</span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 space-x-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            <Image src={settings} alt="settings" />
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 space-x-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            <Image src={teams} alt="teams" />
            <span>Teams</span>
          </a>
          <a
            href="#"
            className="flex items-center p-2 space-x-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            <Image src={analytics} alt="analytics" />
            <span>Analytics</span>
          </a>
        </nav>
        <button
          onClick={() => setOpenModal(true)}
          className="p-2 mt-5 rounded-lg bg-create-new-task text-white gap-3 items-center space-x-2 flex justify-center"
        >
          Create new task
          <Image src={create} alt="create" width={20} height={20} />
        </button>
        <button className="px-5 py-2 mt-auto text-sm text-gray-700 bg-gray-200 rounded flex items-center justify-between">
          <Image src={download} alt="download" width={30} height={30} />
          <div>
            <h5 className="font-bold text-gray-500">Download the app</h5>
            <h6 className="text-xs text-gray-500">Get the full experience </h6>
          </div>
        </button>
      </div>
      <CreateTask openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Sidebar;
