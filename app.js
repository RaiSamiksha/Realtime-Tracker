const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);

const io = socketio(server);
dotenv.config();

// Set view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Get port from environment and store in Express
const PORT = process.env.PORT || 4000;

io.on("connection", function (socket) {
    socket.on("send-location", function (data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function () {
        io.emit("user-disconnected", socket.id);
    });

    console.log("connected", socket.id);
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
