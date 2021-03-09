// renders the main block of the application, which is visible after authorization,
// and is divided into 2 blocks

import MessagesField from "./MessagesField/MessagesField";
import style from "./Chats.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import ChatsListContainer from "./ChatsList/ChatsListContainer";

const Chats = () => {
    return <div className={style.wrapper}>
        <div className={style.wrapper_navigationList}>
            <ChatsListContainer />
        </div>
        <div className={style.wrapper_messagesField}>
            <MessagesField />
        </div>
    </div>
}

export default compose(
    withAuthRedirect
)(Chats);