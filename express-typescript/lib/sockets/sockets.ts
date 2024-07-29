import { type Server } from "socket.io";

// Function to create socket for chat application
function createSocket(socketServer:Server) {
  const io = socketServer.of("/socket");

  io.on("connection", (socket) => {
    /**
     * Basic echo socket
     * listen to "message" event to receive data
     */
    socket.on("message" , (data) => {
      socket.emit("message", data);
    })
  });

  return io;
}

export { createSocket }