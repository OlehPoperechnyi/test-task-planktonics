import {connect} from "react-redux";
import Messages from "./Messages";

let mapMessagesDataStateToProps = (state) => {
    return {
        messages: state.messagesData.messages,
        chatId: state.messagesData.chatsList.activeChatId,
        userId: state.auth.id,
    };
};

export default connect(mapMessagesDataStateToProps, {})(Messages);