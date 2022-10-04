const cypress = require("cypress");
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
