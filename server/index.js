const express = require("express");
const cors = require("cors");

const routes = require("./routers/routers");

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
