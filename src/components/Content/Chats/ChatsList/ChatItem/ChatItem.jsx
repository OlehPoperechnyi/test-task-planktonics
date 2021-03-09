//responsible for rendering the chat (group) and visualizing the process
import style from "./ChatItem.module.css";
import {NavLink} from "react-router-dom";

const ChatItem = ({id, name, changeChat}) => {
    return (
        <div className={style.chatItem}>
            <NavLink className={style.chatItem__link}
                     activeClassName={style.active}
                     to={"/chats/" + id}
                     onClick={()=> changeChat(id) }>{name}</NavLink>
        </div>
    );
};

export default ChatItem;