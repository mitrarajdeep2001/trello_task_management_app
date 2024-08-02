import React from "react";
import Image from "next/image";
import status from "../../public/status.svg";
import priority from "../../public/Priority.svg";
import deadline from "../../public/deadline.svg";
import description from "../../public/description.png";
import share from "../../public/share.png";
import favourite from "../../public/favourite.svg";
import cross from "../../public/cross.svg";
import expand from "../../public/expand.svg";
import { Modal } from "antd";

interface CreateTaskProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTask: React.FC<CreateTaskProps> = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      title=""
      centered
      closable={false}
      okText="Save"
      open={openModal}
      onOk={() => setOpenModal(false)}
      onCancel={() => setOpenModal(false)}
    >
      <div className="p-6 bg-white rounded-lg w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3 space-x-2">
            <button onClick={() => setOpenModal(false)}>
              <Image src={cross} alt="cross" width={20} height={20} />
            </button>
            <button>
              <Image src={expand} alt="expand" width={20} height={20} />
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="py-2 px-4 bg-gray-100 text-gray-500 rounded-lg flex gap-3 items-center">
              Share
              <Image src={share} alt="share" width={20} height={20} />
            </button>
            <button className="py-2 px-4 bg-gray-100 text-gray-500 rounded-lg flex gap-3 items-center">
              Favorite
              <Image src={favourite} alt="favourite" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="text-3xl font-medium text-gray-300 mb-7">
          <input
            className="border-none outline-none text-gray-500"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="space-y-4 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Image src={status} alt="status" width={20} height={20} />
              <span>Status</span>
            </div>
            <div className="text-gray-400">Not selected</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Image src={priority} alt="priority" width={20} height={20} />
              <span>Priority</span>
            </div>
            <div className="text-gray-400">Not selected</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Image src={deadline} alt="deadline" width={20} height={20} />
              <span>Deadline</span>
            </div>
            <div className="text-gray-400">Not selected</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Image
                src={description}
                alt="description"
                width={20}
                height={20}
              />
              <span>Description</span>
            </div>
            <div className="text-gray-400">Not selected</div>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <h2 className="font-bold text-lg">+</h2>
            <span>Add custom property</span>
          </div>
        </div>
        <div className="mt-4 text-gray-400">
          <input
            className="border-none outline-none text-gray-500"
            type="text"
            placeholder="Start writing, or drag your own files here."
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateTask;
