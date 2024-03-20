import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen duration-200"
    >
      <h1 className="text-white">Background Changer</h1>
      <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "aqua" }}
            onClick={() => setColor("aqua")}
          >
            Aqua
          </button>
          <button
            className="outeline-none px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
