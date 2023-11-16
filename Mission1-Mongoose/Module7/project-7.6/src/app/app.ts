// const express = require('express') --> amra ESM module system use krteci
import express from "express"; //import syntax use krteci
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
