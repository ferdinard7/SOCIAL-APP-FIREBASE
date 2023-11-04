import "../styles/chat.css";
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";
import ListMessages from "./ListMessages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
// import Message from "./Message";
// import Messages from "./Messages";

const Chat = () => {

    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chat-info">
                <span>{data.user?.displayName}</span>
                <div className="chat-icons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <ListMessages />
            <Input />
            </div>
    )
}

export default Chat;