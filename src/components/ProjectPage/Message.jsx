import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Messages = () => {
  const [value, setValue] = useState("");
  return (
    <div className=" max-w-6xl mx-auto text-white">
      <div className="px-9 py-9 h-[351px] flex-wrap gap-y-5  border-setting bg-[#0B1A2880] rounded-lg">
        <div className="pb-6 border-b-[1px] border-gray-500 flex justify-center">
          <h2 className="text-base  font-bold">Today</h2>
        </div>
        <div className="max-w-3xl mx-auto py-8 border-b-[1px] flex justify-between items-center border-gray-500">
          <div className="flex items-center gap-x-2">
            <span className="py-1 px-2 font-medium rounded-full bg-[#15B8C7]">
              TJ
            </span>
            <h2 className="text-base font-medium">Terrence Jeffords</h2>
            <p className="text-base font-light">Created a project</p>
          </div>
          <p className="text-base font-light">Oct 22, 2023 11:26 AM</p>
        </div>
      </div>
      <div className=" mt-6 flex-wrap gap-y-5  border-setting bg-[#0B1A2880] rounded-lg">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default Messages;