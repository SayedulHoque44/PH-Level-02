// const express = require('express') --> amra ESM module system use krteci
import { error } from "console";
import express, { NextFunction, Request, Response } from "express"; //import syntax use krteci
const app = express();
// parser
app.use(express.json()); // body te json data accept krte parbe
app.use(express.text()); // body te plain text data accept krte parbe

//-------------> Router
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

//--------> ulta palta url dile tkn segula catch korar jonno
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    status: "Error",
    message: "Somthing Went Wrong!",
  });
});

// ---------->Error handdling
app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(somthing);
  } catch (err) {
    next(error); // error poperty dewar karone ata onno kono handler kacehe na giye golbal error middleware er kache jabe
    // res.status(404).send({
    //   status: "Error",
    //   message: "Faild to get Data",
    // });
  }
});

// --------->middleware
const checkvalidName = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.name === "sayed") {
    next();
  }
  res.status(403).send({ message: "unable to access" });
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

// global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send({
    status: "Error",
    message: "Somthing Went Wrong!",
  });
});

export default app;
