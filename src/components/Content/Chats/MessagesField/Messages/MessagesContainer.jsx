import {connect} from "react-redux";
import Messages from "./Messages";
import MyMessageContainer from "./MyMessage/MyMessageContainer";
import Message from "./Message/Message";

const MessagesContainer = ({chatId, ...props}) => {
    //select messages of a specific chat
    let messagesMap = props.messages.map((m, i) => {
        if (m.chatId === chatId) {
            //find our messages
            return (props.userId === m.userId)
                ? <MyMessageContainer messageId={m.messageId} message={m.message} key={i}/>
                : (() => {
                    let userId = props.users.map( (elem) => m.userId === elem.userId).indexOf(true);
                    let user = props.users[userId];
                    return (<Message message={m.message} user={user} key={i}/>)
                })();
        }
        return '';
    });
    return <Messages messagesMap={messagesMap}/>
}

let mapMessagesDataStateToProps = (state) => {
    return {
        messages: state.messagesData.messages,
        chatId: state.messagesData.chatsList.activeChatId,
        userId: state.auth.id,
        users: state.messagesData.users,
    };
};

export default connect(mapMessagesDataStateToProps, {})(MessagesContainer);