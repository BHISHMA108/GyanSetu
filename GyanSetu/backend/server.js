const app = require("./app");
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// // import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config.js";
// import authRoutes from "./routes/authRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";
// import User from "./models/User.js";

// dotenv.config();
// connectDB();

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: "*" },
// });

// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// const users = {};

// // Socket.io Connection
// io.on("connection", (socket) => {
//   console.log("New user connected:", socket.id);

//   // User joins chat
//   socket.on("join", (userId) => {
//     users[userId] = socket.id;
//     User.findByIdAndUpdate(userId, { online: true }).exec();
//     io.emit("userOnline", userId);
//   });

//   // Sending Messages
//   socket.on("sendMessage", async ({ sender, receiver, message }) => {
//     const newMessage = new Message({ sender, receiver, message });
//     await newMessage.save();

//     if (users[receiver]) {
//       io.to(users[receiver]).emit("receiveMessage", { sender, message });
//     }
//   });

//   // User disconnects
//   socket.on("disconnect", () => {
//     const userId = Object.keys(users).find((key) => users[key] === socket.id);
//     if (userId) {
//       delete users[userId];
//       User.findByIdAndUpdate(userId, { online: false }).exec();
//       io.emit("userOffline", userId);
//     }
//     console.log("User disconnected:", socket.id);
//   });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
