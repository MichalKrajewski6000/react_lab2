import React, { useState } from "react";
import { MessageCircle, XCircle } from "react-feather";

const ChatBox = () => {
  const [opened, setOpen] = useState(false);

  if (!opened)
    return (
      <div
        style={{
          borderRadius: "50%",
          border: "2px solid black",
          width: 32,
          height: 32,
          float: "right",
        }}
      >
        <MessageCircle onClick={() => setOpen(true)} />
      </div>
    );

  return (
    opened && (
      <div style={{ border: "1px solid black", borderRadius: 10 }}>
        <XCircle onClick={() => setOpen(false)} />
        <input type="textArea" />
      </div>
    )
  );
};

export default ChatBox;
