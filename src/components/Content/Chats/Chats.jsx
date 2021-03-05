import MessagesField from "./MessagesField/MessagesField";
import style from "./Chats.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import ChatsListContainer from "./ChatsList/ChatsListContainer";

const Chats = (props) => {
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