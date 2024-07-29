import express from "express";
import http from "http"; // use https for secure connection
import cors from "cors";
import { config } from "dotenv";
import { corsConfig } from "./lib/config/config";
import { Server } from "socket.io";
import { readFileSync } from "fs";

import { createSocket } from "./lib/sockets/sockets";
import { router } from "./lib/api/api-routes";

config();
const PORT = process.env.PORT || 3000;

// Express app initialization
const app = express().use(cors(corsConfig)).use(router);

//  HTTPS server initialization
const server = http.createServer(
  // uncomment this if you want to use https
  /*
  {
    key: readFileSync("./certificates/cert.key"),
    cert: readFileSync("./certificates/cert.crt"),
  },
  */
  app
);

// Socket initializtion
const socketServer = new Server(server, { cors: corsConfig });
createSocket(socketServer);


// Start server
server.listen(PORT, () => {
  console.log("Server Listening to Port : ", PORT);
});
