// const express = require('express') --> amra ESM module system use krteci
import express, { Request, Response } from "express"; //import syntax use krteci
const app = express();
// parser
app.use(express.json()); // body te json data accept krte parbe
app.use(express.text()); // body te plain text data accept krte parbe

//
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Developer world!");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send(req.body);
});

export default app;
