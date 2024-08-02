"use client";

import React, { useState } from "react";
import search from "../../public/search.png";
import calendar from "../../public/calender_view.png";
import automation from "../../public/automation.png";
import filter from "../../public/filter.png";
import share from "../../public/share.png";
import create from "../../public/create_new.png";
import Image from "next/image";
import CreateTask from "./CreateTask";

const TaskBoardUtilityHeader: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex justify-between items-center p-4 space-x-4">
      <div className="p-2 border border-gray-300 rounded-lg bg-white flex items-center space-x-2">
        <input
          className="bg-transparent outline-none border-none"
          type="text"
          placeholder="Search"
        />
        <Image src={search} alt="search" width={20} height={20} />
      </div>
      <div className="flex gap-5">
        <div className="p-2 rounded-lg flex bg-[#F4F4F4] text-gray-500 gap-3 items-center space-x-2">
          Calendar view
          <Image src={calendar} alt="calendar" width={20} height={20} />
        </div>
        <div className="p-2 rounded-lg flex bg-[#F4F4F4] text-gray-500 gap-3 items-center space-x-2">
          Automation
          <Image src={automation} alt="automation" width={20} height={20} />
        </div>
        <div className="p-2 rounded-lg flex bg-[#F4F4F4] text-gray-500 gap-3 items-center space-x-2">
          Filter
          <Image src={filter} alt="filter" width={20} height={20} />
        </div>
        <div className="p-2 rounded-lg flex bg-[#F4F4F4] text-gray-500 gap-3 items-center space-x-2">
          Share
          <Image src={share} alt="share" width={20} height={20} />
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="p-2 rounded-lg flex bg-create-new-task text-white gap-3 items-center space-x-2"
        >
          Create new
          <Image src={create} alt="create" width={20} height={20} />
        </button>
      </div>
      <CreateTask openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default TaskBoardUtilityHeader;
