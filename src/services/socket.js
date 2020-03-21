import socketio from "socket.io-client";

const socket = socketio(process.env.REACT_APP_API_URL, { autoConnect: false });

function subscribeToUsers(newGame) {
  socket.on("newMember", data => {
    console.log(data);
    newGame();
  });
}
function unSubscribeToUsers() {
  socket.off("newMember");
}

function connect(user) {
  socket.io.opts.query = { user };
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { socket, connect, disconnect, subscribeToUsers, unSubscribeToUsers };
