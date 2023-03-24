import React from "react";
import { useState } from "react";
import axios from "axios";
import GenerateImage from "./GenerateImage";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [generatedContent, setGeneratedContent] = useState();
  const [loading, setLoading] = useState(false);

  async function getContent() {
    setLoading(true);
    console.log(loading);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/getcontent",
        {
          prompt: userInput,
        }
      );
      const data = response.data.output.text;
      setGeneratedContent(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center bg-cyan-50">
      <h1 className="text-4xl font-bold mt-20">
        {" "}
        Let's generate your content 🥂{" "}
      </h1>
      <p className="text-2xl px-40 text-center py-10 ">
        {" "}
        Enter some text prompt below for us to complete the post for you, either
        a prompt with what you want, or start writing a story and ask it
        complete, the platform is all yours 🚀
      </p>
      <div className="flex flex-row justify-center w-screen">
        <input
          value={userInput}
          onChange={(e) => {
            generatedContent && setGeneratedContent("");
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="enter your prompt here"
          className="input input-bordered input-info input-md w-1/2 text-lg bg-white text-black"
        />
        <button
          className="btn btn-outline btn-primary mx-10"
          onClick={getContent}
        >
          {loading ? (
            <> generating....</>
          ) : generatedContent ? (
            <> re-generate 🫡</>
          ) : (
            <>
              {" "}
              <> get the post ✨ </>
            </>
          )}
        </button>
      </div>
      {generatedContent && (
        <>
          <div className="flex flex-col items-center w-3/4 rounded-md p-5">
            <h1 className="text-md font-bold mt-20 text-center">
              {" "}
              {generatedContent}
            </h1>
          </div>
          <GenerateImage userInput={userInput} />
        </>
      )}
    </div>
  );
}

export default Home;
