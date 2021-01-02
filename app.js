const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));
app.use(express.text());
app.set("views", "./views");
app.set("view engine", "jade");

const clients = {};

io.on("connection", socket => {
  console.log("a user has connected");
  socket.on("disconnect", () => {
    console.log("a user has disconnected");
  });
  socket.on("keydown", data => {
    console.log(data);
  });
  socket.on("keyup", data => {
    console.log(data);
  });
});

app.get("/", (req, res) => {
  res.locals.id = req.query.id || 1;
  res.render("index");
});

http.listen(80, () => {
  console.log("server up");
});