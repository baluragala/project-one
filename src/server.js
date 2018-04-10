var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.send("project one");
});

io.on("connection", function(socket) {
  console.log("connected");
  setTimeout(() => {}, 1000);
  socket.on("change stat", function(data) {
    console.log("change stat", data);
    io.emit("new stat", data);
  });
});

http.listen(3001, function() {
  console.log("listening on *:3001");
});
