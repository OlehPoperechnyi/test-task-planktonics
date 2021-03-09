import style from "./ChatsList.module.css";

const ChatsList = ({chatsMap}) => {
        return (
            <div className={style.chatsList}>
                {chatsMap}
            </div>
    );
};

export default ChatsList;