import style from "./ChatItem.module.css";
import {NavLink} from "react-router-dom";

const ChatItem = (props) => {
    let path = "/chats/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}
                     activeClassName={style.active}
                     className={style.dialog_link}
                     onClick={()=> props.changeChat(props.id) }>{props.name}</NavLink>
        </div>
    );
};

export default ChatItem;