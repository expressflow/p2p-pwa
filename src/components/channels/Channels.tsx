import React, {useState} from "react";
import Container from '@mui/material/Container';
import { AppBar, Toolbar, Typography } from "@mui/material";
import styles from "./channels.module.css";
import Chat from "../chat/Chat";

const Channels = () => {

    const [chats, setChats] = useState([]);

    return (
        <Container maxWidth="lg">
            <AppBar position="absolute">
                <Toolbar className={styles.navRow}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        P2P Chat
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={styles.main}>
                {chats.map((chat: any) => (
                    <Chat chat={chat} />
                ))}
            </main>
        </Container>
    );
}

export default Channels;