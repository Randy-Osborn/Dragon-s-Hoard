const express = require("express");
const server = express();
const port = 8080;
server.use(express.static(__dirname + "/public"));
/*
server.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
*/
server.listen(port, () => {
  console.log("server listening at port " + port);
});
