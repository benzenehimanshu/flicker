import React from "react";
import { CiSearch } from "react-icons/ci";

const RightSideBar = () => {
  return (
    <div className="w-[23%] mt-2">
      <div className="flex items-center bg-gray-100 rounded-full p-2 w-full my-2">
        <div>
          <CiSearch size={20} />
        </div>
        <input
          type="text"
          className="bg-transparent rounded-full px-2 outline-none"
          placeholder="Search"
        ></input>
      </div>
      <div className="p-4 bg-gray-100 rounded-2xl my-3">
        <h1 className="text-lg  font-bold">Who to follow</h1>
        <div>
          <div className=" flex items-center justify-between my-2">
            <img
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
              alt="Avatar"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="ml-2">
              <h1 className="font-bold">Patel</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
              <button className="px-4 py-1 w-full bg-black text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-between my-2">
            <img
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
              alt="Avatar"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="ml-2">
              <h1 className="font-bold">Mahesh</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
              <button className="px-4 py-1 w-full bg-black text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-between my-2">
            <img
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
              alt="Avatar"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="ml-2">
              <h1 className="font-bold">Aakash</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
              <button className="px-4 py-1 w-full bg-black text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-between my-2">
            <img
              src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
              alt="Avatar"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="ml-2">
              <h1 className="font-bold">Pramod</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
              <button className="px-4 py-1 w-full bg-black text-white rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
