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
//
app.get("/", (req, res) => {
    res.send("Hello Developer world!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
exports.default = app;
