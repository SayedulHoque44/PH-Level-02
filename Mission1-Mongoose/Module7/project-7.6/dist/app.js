"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express') --> amra ESM module system use krteci
const express_1 = __importDefault(require("express")); //import syntax use krteci
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json()); // body te json data accept krte parbe
app.use(express_1.default.text()); // body te plain text data accept krte parbe
// Router
const userRouter = express_1.default.Router();
// use router for users
app.use("/api/v1/users", userRouter);
// create api routing useing router - for users
userRouter.post("/create-user", (req, res) => {
    res.send({
        status: "ok",
        message: "created succssfully user",
        data: req.body,
    });
});
userRouter.get("/get-user", (req, res) => {
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
const checkvalidName = (req, res, next) => {
    if (req.query.name === "sayed") {
        next();
    }
    res.statusCode = 403;
    res.send({ message: "unable to access" });
};
//req res
app.get("/", (req, res) => {
    res.send("hello");
});
//get url query
app.get("/query", checkvalidName, (req, res) => {
    res.send(req.query);
});
// get url id
app.get("/:userId", (req, res) => {
    res.send(req.params.userId);
});
// post json/text data by body
app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
exports.default = app;
