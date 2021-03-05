import ChatItem from "./ChatItem/ChatItem";
import style from "./ChatsList.module.css";



const ChatsList = (props) => {
    let chatsMap = props.chats.map(d => <ChatItem changeChat={props.changeChat}
                                                  name={d.name} id={d.id} key={d.id}/>);
        return (
            <div className={style.chats}>
                {chatsMap}
            </div>
    );
};

export default ChatsList;