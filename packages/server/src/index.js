const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_req, res) => res.send("OK"));

app.listen(port, () => console.log(`app listening on port ${port}`));
