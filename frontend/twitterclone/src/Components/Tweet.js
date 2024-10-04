import React from "react";
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa6";

import { FaRetweet } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

import { FaRegComment } from "react-icons/fa";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex p-3  border-b border-gray-300">
          <img
            src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
            alt="Avatar"
            className="w-[35px] h-[35px] rounded-full"
          />

          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Himanshu Yadav</h1>
              <p className="text-gray-500 text-sm ml-1">@benzenehimanshu ·1m</p>
            </div>
            <div>
              Hello Developers let's connect & grow together! Simplicity is key.
              🧩 #DevWisdom #CleanCode
            </div>
            <div className=" flex items-center justify-between w-[80%] pl-4 ">
              <div className="flex items-center ">
                <div className="p-2 hover:bg-green-400 rounded-full">
                  <FaRegComment className="hover: bg" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-200 rounded-full">
                  <FaRetweet className="hover: bg" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-pink-300 rounded-full">
                  <FaRegHeart className="hover: bg" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-yellow-200 rounded-full">
                  <FaRegBookmark className="hover: bg" />
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
