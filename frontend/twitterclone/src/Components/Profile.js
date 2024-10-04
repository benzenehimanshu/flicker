import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-[50%]">
      <div className="flex items-center py-2">
        <Link
          to="/"
          className="rounded-full p-2 hover:bg-gray-500 hover:cursor-pointer"
        >
          <IoMdArrowRoundBack size="24px" />
        </Link>
        <div className="ml-2">
          <h1 className="font-bold text-lg">Himanshu Yadav</h1>
          <p className="text-gray-500 text-sm">23 posts</p>
        </div>
      </div>

      {/* Banner section */}
      <div className="relative">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/295/642/413/twitter-logo-background-social-network-wallpaper-preview.jpg"
          alt="banner"
          className="w-full h-[200px] object-cover"
        />
        {/* Avatar on top of banner */}
        <img
          src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
          alt="Avatar"
          className="w-[130px] h-[130px] rounded-full border-4 border-white absolute left-4 bottom-[-65px]"
        />
      </div>
      <div className="text-right m-4">
        <button className=" hover:bg-gray-200 px-4 py-1 rounded-full border border-gray-400 font-semibold">
          Edit Profile
        </button>
      </div>
      <div className="m-4">
        <h1 className="font-bold text-xl">Himanshu Yadav</h1>
        <p>@benzenehimanshu</p>
      </div>
      <div>
        <p>
          Building the future, one line of code at a time. 💻 | Tech enthusiast
          | Learning something new every day.
        </p>
      </div>
    </div>
  );
};

export default Profile;
