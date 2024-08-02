import Image from "next/image";
import React from "react";
import question_mark_in_circle from "../../public/question_mark_in_circle.png";
import intro_tags from "../../public/intro_tags.png";
import share_notes_instantly from "../../public/share_notes_instantly.png";
import access_anywhere from "../../public/access_anywhere.png";

const Header: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Good morning, <span className="text-purple-600">Joe!</span>
        </h1>
        <button className="px-4 py-2 text-sm rounded hover:bg-gray-300 flex justify-center items-center gap-2">
          Help & feedback
          <Image
            src={question_mark_in_circle}
            alt="Help"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className="flex mt-4 space-x-4">
        <div className="flex gap-5 items-center p-4 bg-gray-100 rounded">
          <Image src={intro_tags} alt="Introducing tags" />
          <div>
            <h2 className="mt-2 text-sm font-semibold text-gray-600">
              Introducing tags
            </h2>
            <p className="text-xs text-gray-500">
              Easily categorize and find your notes by adding tags. Keep your
              workspace clutter-free and efficient.
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center p-4 bg-gray-100 rounded">
          <Image src={share_notes_instantly} alt="Share Notes Instantly" />
          <div>
            <h2 className="mt-2 text-sm font-semibold text-gray-600">
              Share Notes Instantly
            </h2>
            <p className="text-xs text-gray-500">
              Effortlessly share your notes with others via email or link.
              Enhance collaboration with quick sharing options.
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center p-4 bg-gray-100 rounded">
          <Image src={access_anywhere} alt="Access Anywhere" />
          <div>
            <h2 className="mt-2 text-sm font-semibold text-gray-600">Access Anywhere</h2>
            <p className="text-xs text-gray-500">
              Sync your notes across all devices. Stay productive whether you’re
              on your phone, tablet, or computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
