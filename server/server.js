const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();

app.use(express.json());
app.use(cors());
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const basePromptPrefix = `You are a smart bot, that generates a 250 words content based on the input that i provide, be creative, use imagination, and make it sound creative and engaging.
Prompt: `;

app.post("/api/getcontent", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: ` ${basePromptPrefix} ${prompt} Output:`,
      max_tokens: 750,
      temperature: 0.8,
    });
    const basePromptOutput = response.data.choices.pop();
    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/image", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running on port 3001");
});
