import { WebSocketServer } from "ws";
import { prisma } from "db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("Socket Connected", socket);

  socket.on("message", async (message) => {
    const data = await prisma.user.create({
      data: {
        name: Math.random().toString(),
        email: Math.random().toString(),
      },
    });
    socket.send("Hello Ji with", data as any)
  });
});
