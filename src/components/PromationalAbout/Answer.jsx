import React, { useState } from "react";

const Answer = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShow(!show)}
        className=" flex flex-1  justify-between px-5 py-4 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
      >
        <button>{question}</button>
        <span>{show ? "-" : "+"}</span>
      </div>
      {show && (
        <p className="p-2 border-t-2 rounded-3xl bg-slate-600">{answer}</p>
      )}
    </div>
  );
};

export default Answer;
