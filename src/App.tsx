import React, { useEffect, useState } from "react";

import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function App() {
  useEffect(() => {
    socket.on("message", (message) => {
      console.log("received a new message from the server: ", message);
    });
  }, []);

  const sendMessage = (event: any) => {
    event.preventDefault();

    socket.emit("client-message", "This is from client");
  };
  return (
    <div>
      <button onClick={sendMessage}>Send message to server</button>
    </div>
  );
}

export default App;
