import React, { useEffect, useState } from "react";

const WebSocket2 = () => {
  const [data, setData] = useState(null);

  // Listen for messages
  const socket = new WebSocket("ws://localhost:8080"); // Replace with your WebSocket server URL

  useEffect(() => {

    socket.addEventListener("message", function (event) {
      const plantData = JSON.parse(event.data);
      // updateDashboard(plantData); // Update dashboard UI with the received data
      setData(plantData);
    });

  }, [socket]);
  console.log("hre3");
  return (
    <div>
      <h2>Temperature : {data?.temperature}</h2>
      <h2>Humidity : {data?.humidity}</h2>
    </div>
  );
};

export default WebSocket2;
