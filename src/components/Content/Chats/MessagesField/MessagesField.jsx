//renders a message field with a new message input field

import style from './MessagesField.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import MessagesContainer from "./Messages/MessagesContainer";

const MessagesField = () => {
    return (
        <div className={style.messagesField}>
            <div className={style.messagesField__messages}>
                <MessagesContainer />
            </div>
            <div className={style.messagesField__newMessage}>
                <NewMessageContainer />
            </div>
        </div>
    );
}

export default MessagesField;