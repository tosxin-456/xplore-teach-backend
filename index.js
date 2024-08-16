require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 45665;
app.use(cors());
const body_parser = require("body-parser");
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.listen(port, () => {
  console.log(`listening on port:${port}`);
});

app.use("/jon", (reqeust, response) => {
  response.json({
    status: 200,
    message: "Hello",
    success: true,
  });
});
