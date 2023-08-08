import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

import swaggerMiddleware from "./middlewears/swagger-middlewear.js";
import connectToMongo from "../src/config/mongo.js";
import toDoRouter from "./routes.js/todo-router.js";
const app = express();
dotenv.config();
connectToMongo();

//tying to connect to front file
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const frontEndFolderPath = path.join(__dirname, "../todo-app-front");

// Serve the static front-end files (e.g., index.html, style.css, script.js)
// app.use(express.static(frontEndFolderPath));

////////////////////
app.use(bodyParser.json());
connectToMongo();

app.use("/api", toDoRouter);
app.use("/", ...swaggerMiddleware());
app.listen(3001);
