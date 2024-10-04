import React from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="w-[23%]">
      <div className="ml-4">
        <img
          width="40px"
          src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1724025600&semt=ais_hybrid"
          alt="Logo"
        />
      </div>
      <Link to="/">
        <div className="mt-4 flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <GoHomeFill size={"24px"} />
          <h2 className="font-bold ml-2 text-lg ">Home</h2>
        </div>
      </Link>
      <div className="mt-4 flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
        <IoSearch size={"24px"} />
        <h2 className="font-bold ml-2 text-lg ">Explore</h2>
      </div>
      <div className="mt-4 flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
        <IoNotifications size={"24px"} />
        <h2 className="font-bold ml-2 text-lg ">Notifications</h2>
      </div>
      <div className="mt-4 flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
        <FaRegBookmark size={"24px"} />
        <h2 className="font-bold ml-2 text-lg ">Bookmarks</h2>
      </div>
      <Link to="/profile">
        <div className="mt-4 flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <FaUserLarge size={"24px"} />
          <h2 className="font-bold ml-2 text-lg ">Profile</h2>
        </div>
      </Link>
      <div className="mt-4 flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
        <LuLogOut size={"24px"} />
        <h2 className="font-bold ml-2 text-lg ">Logout</h2>
      </div>
      <button className="px-4 py-2 border-none text-md bg-[#1DA1F2] rounded-full w-full text-white font-bold">
        Post
      </button>
    </div>
  );
};

export default LeftSideBar;
