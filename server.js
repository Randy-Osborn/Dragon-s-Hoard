const fetch = require("node-fetch");
const express = require("express");
const server = express();
const port = 8080;
server.use(express.static(__dirname + "/public"));

server.get("/items", (req, res) => {
  fetch("https://www.dnd5eapi.co/api/equipment").then((result) => {
    result.json().then((data) => {
      res.status(200).json(data);
    });
  });
});

server.listen(port, () => {
  console.log("server listening at port " + port);
});
