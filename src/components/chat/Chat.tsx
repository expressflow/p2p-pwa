import React from "react";
import styles from "./chat.module.css";

type ChatType = {
    message: string;
    activeUser: string;
    user: string;
}

type ChatProps = {
    chat: ChatType;
}

const Chat = ({chat}: ChatProps) => {
    return (
        <div className={`${styles.message} ${
            chat.user === chat.activeUser ? styles.sent : styles.received
          }`}>
              <div className={styles.text}>
              <h4 style={{ textAlign: "left" }}>{chat.user}</h4>
              <span>{chat.message}</span>
            </div>
          </div>
    );
}

export default Chat;