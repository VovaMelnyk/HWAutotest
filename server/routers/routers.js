const express = require("express");
const cypress = require("cypress");

const router = express.Router();

const runTest = (url, res) => {
  (async () => {
    const results = await cypress.run({
      browser: "chrome",
      headless: true,
      config: {
        baseUrl: `${url}`,
        defaultCommandTimeout: 500,
        screenshotOnRunFailure: false,
        video: false,
      },
    });
    res.send(results);
  })();
};

router.post("/postHw", (req, res, next) => {
  console.log("req", req.body);
  const { url } = req.body;
  console.log("url", url);
  runTest(url, res);
  // res.send("Test run");
});

module.exports = router;
