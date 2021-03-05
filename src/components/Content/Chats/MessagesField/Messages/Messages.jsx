import style from "./Messages.module.css";
import Message from "./Message/Message";
import React, {useEffect} from "react";
import MyMessageContainer from "./MyMessage/MyMessageContainer";
import {useParams} from "react-router";


const Messages = (props) => {
    let { id } = useParams();
    let chatId = (id != props.chatId) ? id : props.chatId;
    let messagesMap = props.messages.map(m => {
        if (m.chatId == chatId) {
            return (props.userId == m.userId)
                ? <MyMessageContainer messageId={m.messageId} message={m.message} key={m.id}/>
                : <Message message={m.message} key={m.id}/>;
        }
        return '';
    });
    useEffect(() => {
        const objDiv = document.getElementById('messagesWrapper');
        objDiv.scrollTop = objDiv.scrollHeight;
    });
    return <div className={style.wrapper} id='messagesWrapper'>
        {messagesMap}
    </div>
}

export default Messages;