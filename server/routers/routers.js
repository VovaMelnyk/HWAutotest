const express = require("express");
const { exec } = require("child_process");
const cypress = require("cypress");

var fs = require("fs");
const { HW1Test } = require("../templates/Hw1Check");

const router = express.Router();

const createTestFile = (url, res) => {
  // create file with test and add user URL
  // fs.writeFileSync("cypress/e2e/HW/Hw1Test.cy.js", HW1Test(url));

  // exec('cypress run --spec "cypress/e2e/HW/Hw1Test.cy.js"', (err, stdout, stderr) => {
  //   if (err) {
  //     console.log("error", err);
  //     return;
  //   }
  //   if (stderr) {
  //     console.log("stderr", stderr);
  //   }
  //   console.log("stdout", stdout);
  // });

  cypress
    .run({
      // the path is relative to the current working directory
      spec: "./cypress/e2e/HW/Hw1Test.cy.js",
    })
    .then((results) => {
      console.log("results", results);
    })
    .catch((err) => {
      console.error("err", err);
    });
};

router.post("/postHw", (req, res, next) => {
  console.log("req", req.body);
  const { url } = req.body;
  console.log("url", url);
  createTestFile(url, res);
  res.send("Test run");
});

module.exports = router;
