import React, { useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from "./ReqUserPostCard";

const ReqUsePostPart = () => {
  const [activeTab, setActiveTab] = useState();

  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable></AiOutlineTable>,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine></RiVideoAddLine>,
      activeTab: "",
    },
    {
      tab: "Saved",
      icon: <BiBookmark></BiBookmark>,
      activeTab: "",
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser></AiOutlineUser>,
      activeTab: "",
    },
  ];
  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 text-sm`}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <div className=" flex flex-wrap">
            {[1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
        </div>
      </div>
    </div>
  );
};

export default ReqUsePostPart;
