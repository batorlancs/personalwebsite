import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/main.css";
// import { Configuration, OpenAIApi } from "openai";
// import express from "express";
// import bodyParser from "body-parser";

// const configuration = new Configuration({
//     organization: "org-pYAXnuYfiqgUTq4SUXb3gqbz",
//     apiKey: "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",
// });

// const openai = new OpenAIApi(configuration);
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());
// app.use(cors());

// app.post("/", async (req: any, res: any) => {
//     const response = await openai.createCompletion({
//         "model": "text-davinci-003",
//         "prompt": "Say this is a test",
//         "max_tokens": 7,
//         "temperature": 0,
//     });
//     console.log(response.data);
//     res.json({
//         message: "Hello World!"
//     });
// });

// app.listen(port, () => {
//     console.log("App is listening");
// })

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(<App />);
