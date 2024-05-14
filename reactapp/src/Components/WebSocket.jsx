import React, { useEffect, useState } from "react";

const WebSocketComp = () => {
  //give an initial state so that the data won't be undefined at start
  const [bids, setBids] = useState([0]);

  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  useEffect(() => {
    const ws = new WebSocket("wss://ws.bitstamp.net");

      ws.onopen = (event) => {
        ws.send(JSON.stringify(apiCall));
      };
      ws.onmessage = function (event) {
        const json = JSON.parse(event.data);
        try {
          if (json.event === "data") {
            setBids(json.data.bids.slice(0, 5));
          }
        } catch (err) {
          console.log(err);
        }
      };
      //clean up function
      return () => ws.close();
  }, []);

  //map the first 5 bids
  const firstBids = bids.map((item,index) => {
    return (
      <div key={index}>
        <p> {item}</p>
      </div>
    );
  });

  return <div>{firstBids}</div>;
};

export default WebSocketComp;
