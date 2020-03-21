import socketio from "socket.io-client";

const socket = socketio(process.env.REACT_APP_API_URL, { autoConnect: false });

function subscribeToUser(PlayerGamesList) {
  socket.on("newMember", data => {
    PlayerGamesList();
  });
}
function unSubscribeToUser() {
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

export { socket, connect, disconnect, subscribeToUser, unSubscribeToUser };
