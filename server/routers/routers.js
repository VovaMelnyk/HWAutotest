const express = require("express");
const cypress = require("cypress");
const crypto = require("crypto");

const router = express.Router();

const cache = new Map(); // node-cache

const runTest = (url) => {
  const uuid = crypto.randomUUID();
  cache.set(uuid, {
    status: 'in_progress',
    results: null,
  });

  cypress.run({
    browser: "chrome",
    headless: true,
    config: {
      baseUrl: `${url}`,
      defaultCommandTimeout: 500,
      screenshotOnRunFailure: false,
      video: false,
    },
  }).then((results) => {
    cache.set(uuid, {
      status: 'completed',
      results,
    });
  }).catch(() => {
    cache.set(uuid, {
      status: 'error',
      results: null
    });
  });

  return uuid;
};

router.all('*', (req, res, next) => {
  console.log(new Date());
  console.log(req.originalUrl);
  console.log(req.body);
  next();
});

router.post("/postHw", (req, res, next) => {
  const { url } = req.body;
  const id = runTest(url);

  res.send({
    id
  });
});

router.get('/results/:id', (req, res) => {
  const { id } = req.params;

  if (!cache.has(id)) {
    res.status(404).end();
    return;
  }

  res.send(cache.get(id));
});

module.exports = router;
