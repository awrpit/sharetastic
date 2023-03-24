import React from "react";
import axios from "axios";
import { useState } from "react";

function GenerateImage({ userInput }) {
  const [imageInput, setimageInput] = useState();
  const [imageOutput, setimageOutput] = useState();
  const [loadingOne, setLoadingOne] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState();

  async function getImage() {
    imageInput ? setLoadingTwo(true) : setLoadingOne(true);
    try {
      const response = await axios.post("http://localhost:3001/api/image", {
        prompt: imageInput ? imageInput : userInput,
      });
      const image = response.data.data[0].url;
      imageInput ? setLoadingTwo(false) : setLoadingOne(false);
      setimageOutput(image);
      console.log(imageOutput);
      console.log(response.data.data[0].url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold mt-20">
        {" "}
        Want to generate an image based on your prompt?{" "}
      </h1>
      <button
        className="btn btn-active btn-success btn-wide text-xl m-10"
        onClick={getImage}
      >
        {loadingOne ? <p> generating... </p> : <p> Generate Image 🌸</p>}
      </button>
      <h1 className="text-5xl font-bold"> OR </h1>
      <div className="flex flex-row justify-between m-10">
        <input
          value={imageInput}
          onChange={(e) => setimageInput(e.target.value)}
          type="text"
          placeholder="enter new image prompt here"
          className="input input-bordered input-info input-md w-96 text-lg bg-white text-black"
        />
        <button
          className="btn btn-outline btn-primary mx-10"
          onClick={getImage}
        >
          {loadingTwo ? <p> generating... </p> : <p> Generate new image 💖</p>}
        </button>
      </div>
      {imageOutput && (
        <div className="m-10 flex items-center flex-col">
          <h1 className="text-3xl p-5 text-right">
            {" "}
            Here's your generated image
          </h1>
          <img
            src={imageOutput}
            alt="generated image"
            className="w-48 h-48 rounded-lg items-center"
          />
        </div>
      )}
    </div>
  );
}

export default GenerateImage;
