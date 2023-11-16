// const express = require('express') --> amra ESM module system use krteci
import express, { NextFunction, Request, Response } from "express"; //import syntax use krteci
const app = express();
// parser
app.use(express.json()); // body te json data accept krte parbe
app.use(express.text()); // body te plain text data accept krte parbe

// Router
const userRouter = express.Router();

// use router for users
app.use("/api/v1/users", userRouter);

// create api routing useing router - for users
userRouter.post("/create-user", (req: Request, res: Response) => {
  res.send({
    status: "ok",
    message: "created succssfully user",
    data: req.body,
  });
});
userRouter.get("/get-user", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "found 1 user",
    data: {
      name: "sayedul",
      email: "sayed@gamil.com",
    },
  });
});

// middleware
const checkvalidName = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.name === "sayed") {
    next();
  }
  res.statusCode = 403;
  res.send({ message: "unable to access" });
};

//req res
app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});
//get url query
app.get("/query", checkvalidName, (req: Request, res: Response) => {
  res.send(req.query);
});
// get url id
app.get("/:userId", (req: Request, res: Response) => {
  res.send(req.params.userId);
});
// post json/text data by body
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send(req.body);
});

export default app;
