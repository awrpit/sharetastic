import React from "react";
import { useNavigate } from "react-router-dom";

function Launch() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 flex flex-col items-center ">
      <h1 className="text-5xl p-5 font-bold text-center">
        Generating content can be a hastle sometimes, but not anymore. Generate
        quality content and share it with yor audience with just a few clicks.
      </h1>
      <h1 className="text-6xl p-5 font-bold text-center ">
        <span className=" bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">
          Sharetastic
        </span>
        , Your ultimate sidekick!
      </h1>
      <button
        onClick={() => navigate("/home")}
        class="group rounded-2xl h-12 w-48 bg-teal-300 font-bold text-lg text-white relative overflow-hidden mt-10"
      >
        Get Started
        <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
      </button>
    </div>
  );
}

export default Launch;
