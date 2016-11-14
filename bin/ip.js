#!/usr/bin/env node
const lib = require("../lib");
lib((err, result) => {
  console.log(err || result);
});