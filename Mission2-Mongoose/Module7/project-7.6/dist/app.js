"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express') --> amra ESM module system use krteci
const console_1 = require("console");
const express_1 = __importDefault(require("express")); //import syntax use krteci
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json()); // body te json data accept krte parbe
app.use(express_1.default.text()); // body te plain text data accept krte parbe
//-------------> Router
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
// --------->middleware
const checkvalidName = (req, res, next) => {
    if (req.query.name === "sayed") {
        next();
    }
    res.status(403).send({ message: "unable to access" });
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
// ---------->Error handdling
//ulta palta url dile tkn segula catch korar jonno
app.all("*", (req, res) => {
    res.status(400).json({
        status: "Error",
        message: "Somthing Went Wrong!",
    });
});
//error send to golbal middleware
app.get("/error", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(somthing);
    }
    catch (err) {
        next(console_1.error); // error poperty dewar karone ata onno kono handler kacehe na giye golbal error middleware er kache jabe
        // res.status(404).send({
        //   status: "Error",
        //   message: "Faild to get Data",
        // });
    }
}));
// global error handler
app.use((err, req, res, next) => {
    res.status(400).send({
        status: "Error",
        message: "Somthing Went Wrong!",
    });
});
exports.default = app;
