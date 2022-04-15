const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require('./config/mongoose');
app.use(cors({}));
app.use(bodyParser.json());
app.use(express.urlencoded());
const http = require("http");
const chatServer = http.createServer(app);
const chatSockets = require("./config/chat_socket").chatSockets(chatServer);
chatServer.listen(5000);
console.log("chatServer is listening on port 5000");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  } else {
    console.log(`successfully connected to port: ${port}`);
  }
});
