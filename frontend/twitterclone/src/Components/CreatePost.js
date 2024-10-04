import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%] mx-auto">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 text-center w-full px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 text-center w-full px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center p-4">
              <img
                src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
                alt="Avatar"
                className="w-[40px] h-[40px] rounded-full"
              />
              <input
                className="w-full outline-none border-none text-lg ml-4"
                type="text"
                placeholder="What is happening?!"
              />
            </div>
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <div>
                <CiImageOn className="size-[20px]" />
              </div>
              <button className="bg-[#1DA1F2] border-none px-4 py-1.5 rounded-full  text-white font-semibold">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
